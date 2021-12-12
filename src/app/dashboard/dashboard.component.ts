import { Component, OnInit } from "@angular/core";
import { JiraServiceService } from "src/core/services/jira-service.service";
import { element } from "protractor";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  epicName;
  dashboardResponse;
  setEpicResponse;
  filterData: any;
  labelsNameForEpic: any;
  lableArray: string[] = [];
  labelAndIssueMapperArray: any[] = [];
  labelsArray: any[] = [];
  date;
  datessss: any[] = [];

  constructor(private jiraServiceService: JiraServiceService) {}

  ngOnInit() {
    this.Dashboard();
  }
  Dashboard() {
    this.jiraServiceService.jiraDashboardService().subscribe((data: any[]) => {
      this.dashboardResponse = data;
      this.dashboardResponse.filter(test => {
        this.filterData = test.fields.labels;
        this.filterData.forEach(label => {
          if (!this.lableArray.find(z => z == label)) this.lableArray.push(label);
        });
      });

      this.lableArray.forEach(label => {
        this.dashboardResponse.filter(issues => {
          var labelName = issues.fields.labels.find(x => x == label);

          if (issues.fields.issuetype.name == "Epic" && issues.fields.labels.find(x => x == label)) {
            if (!this.labelAndIssueMapperArray.find(x => x.label == label && x.Key == issues.fields.project.key)) {
              this.labelAndIssueMapperArray.push({
                label: labelName,
                Key: issues.fields.project.key,
                Summary: issues.fields.summary,
                Description: issues.fields.issuetype.description,
                DueDate: issues.fields.duedate,
                originalEstimate:issues.fields.timetracking.originalEstimate
              });
            }
          }
        });
      });
      this.labelAndIssueMapperArray.sort((a, b) => (a.DueDate > b.DueDate ? 1 : -1));
      console.log("labelAndIssueMapperArray", this.labelAndIssueMapperArray);
    });
  }
}
