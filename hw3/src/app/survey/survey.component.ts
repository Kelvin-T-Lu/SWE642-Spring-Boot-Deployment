import { Component } from '@angular/core';
import { SurveyData } from '../models/survey-data.model';
import { Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SurveyMethodsService } from '../survey_methods/survey-methods.service';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent {

  constructor(private _studentSurvey: SurveyMethodsService){

  }
  // Functions/Variable for Interests radio buttons 
  radio_interests:string[] = [" Friends", " Television", " Internet", " Other"]
  
  // Event emitter for ngModel radio button.
  @Input() defaultChoice!: string;
  @Output() valueChosen: EventEmitter<any> = new EventEmitter();
  public choose(value: string) {
    this.valueChosen.emit(value);
  }

  // Functions/Variable for Like Checkboxes 
  checkbox_likes:string[] = ["Students", "Location", "Campus", "Atmosphere", "Dorms", "Sports"]


  // Survey related functions.
  survey_model: SurveyData = new SurveyData();

  survey_submit(form:any) {
    this._studentSurvey.postStudentSurvey(form).subscribe((data: any) => {
      console.log("success")

    }, (error: any) => console.log(error));

    this.reload()
  }

  reload(){
    location.reload()
  }

}
