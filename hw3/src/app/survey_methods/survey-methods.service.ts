import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyData } from '../models/survey-data.model';
@Injectable({
  providedIn: 'root'
})
export class SurveyMethodsService {

  private baseURL = "http://localhost:8080";

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  likesArrayLen:number = 6;
  likesArray:string[] = ["Student", "Location", "Campus", "Atmostphere", "Dorms", "Sports"];

  constructor(private httpClient:HttpClient) {}
  
  // Get all surveys.
  getStudentSurveyList(): Observable<any> {

    let output= this.httpClient.get(this.baseURL + "/api/surveys/survey_page");

    console.log(output);

    return output ;
  }

  postStudentSurvey(surveyData: SurveyData): Observable<any> {

    // Converts boolean[] into string[] based on checked checkboxes.
    let convertedLikesArray = []
    for (var index in this.likesArray) {
      if (surveyData.likes[index] === true) {
        convertedLikesArray.push(this.likesArray[index]);
      }
    }
    surveyData.likes = convertedLikesArray;

    console.log(convertedLikesArray);
    
    let httpParams = new HttpParams()
      .set('firstName', surveyData.firstName)
      .set('lastName', surveyData.lastName)
      .set('address', surveyData.address)
      .set('city', surveyData.city)
      .set('state', surveyData.state)
      .set('zip', surveyData.zip)
      .set('telephone', surveyData.telephone)
      .set('email', surveyData.email)
      .set('date', surveyData.date.toString())
      .set('likes', convertedLikesArray.toString())
      .set('interest', surveyData.interest)
      .set('recommend', surveyData.recommend)
      .set('comments', surveyData.comments)
      // .set('likes', surveyData.likes.toString())

    
    const body = JSON.stringify(surveyData);

    console.log("body format");
    console.log(body);
  
    return this.httpClient.post(this.baseURL + "/api/surveys/survey_display", body, this.headers)
    // {
    //   params: httpParams
    // })
  }

  initLikesArray():boolean[]{
    let output_array: boolean[] = Array.apply(null, Array(this.likesArrayLen)).map(i => false);
    return output_array;
  }
}
