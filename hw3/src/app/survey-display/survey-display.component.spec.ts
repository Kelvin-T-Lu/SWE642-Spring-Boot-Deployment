import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDisplayComponent } from './survey-display.component';

describe('SurveyDisplayComponent', () => {
  let component: SurveyDisplayComponent;
  let fixture: ComponentFixture<SurveyDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyDisplayComponent]
    });
    fixture = TestBed.createComponent(SurveyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
