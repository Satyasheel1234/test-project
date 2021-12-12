import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from "./api/api.service";
import { dashboardSevices } from "./api-helper";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JiraServiceService {
  constructor(private apiService: ApiService) { }

  jiraDashboardService(): Observable<any> {
    const { endpoint} = dashboardSevices;
    return this.apiService.get(endpoint).pipe(map(DashboardService => DashboardService));
  }

}
