import { TestBed } from '@angular/core/testing';

import { JiraServiceService } from './jira-service.service';

describe('JiraServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JiraServiceService = TestBed.get(JiraServiceService);
    expect(service).toBeTruthy();
  });
});
