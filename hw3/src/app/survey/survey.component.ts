import { Component } from '@angular/core';
import { SurveyData } from '../models/survey-data.model';
import { Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent {

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

  survey_submit(form:any){
    console.warn(form)
  }

  reload(){
    location.reload()
  }

}
