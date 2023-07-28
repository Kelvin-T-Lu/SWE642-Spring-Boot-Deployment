import { TestBed } from '@angular/core/testing';

import { SurveyMethodsService } from './survey-methods.service';

describe('SurveyMethodsService', () => {
  let service: SurveyMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
