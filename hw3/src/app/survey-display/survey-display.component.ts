import { Component } from '@angular/core';
import { SurveyData } from '../models/survey-data.model';
import { SurveyMethodsService } from '../survey_methods/survey-methods.service';

@Component({
  selector: 'app-survey-display',
  templateUrl: './survey-display.component.html',
  styleUrls: ['./survey-display.component.css']
})
export class SurveyDisplayComponent {
  // studentSurveyList: SurveyData[] = [{ "firstName": "asd", "lastName": "sadf", "address": "sadf", "city": "asdf", "state": "asdf", "zip": 22323, "email": "asdf@asdf.com", "telephone": "123", "date": new Date("2023-07-25"), "likes": [false, true, true, false, true, false], "interest": " Television", "recommend": "Likely", "comments": "" }];
  studentSurveyList: SurveyData[] = [];

  constructor(private _studentSurvey: SurveyMethodsService) { }

  ngOnInit(): void {

    this._studentSurvey.getStudentSurveyList().subscribe(
      data => {

        this.studentSurveyList = data

        console.log("Data: ", this.studentSurveyList)
      }
    )

  }


}
