import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyData } from '../models/survey-data.model';
@Injectable({
  providedIn: 'root'
})
export class SurveyMethodsService {

  likesArrayLen:number = 6;
  likesArray:string[] = ["Student", "Location", "Campus", "Atmostphere", "Dorms", "Sports"];

  constructor(private httpClient:HttpClient) {}
  
  // Get all surveys.
  getStudentSurveyList(): Observable<any> {

    alert("Survey recieved");
    let output= this.httpClient.get("http://localhost:8080/api/surveys");

    console.log(output);

    return output ;
  }

  postStudentSurvey(surveyData: SurveyData): Observable<any> {

    let httpParams = new HttpParams()
      .set('first_name', surveyData.firstName)
      .set('last_name', surveyData.lastName)
      .set('strees_address', surveyData.address)
      .set('city', surveyData.city)
      .set('state', surveyData.state)
      .set('zip', surveyData.zip)
      .set('phone_number', surveyData.telephone)
      .set('email', surveyData.email)
      .set('date_of_survey', surveyData.date.toString())
      .set('liked_most', surveyData.likes.toString())
      .set('interested_in', surveyData.interest)
      .set('likelihood', surveyData.recommend)

    const body = JSON.stringify(surveyData);

    alert("Survey sent");

    console.log("body format");
    console.log(body);
    return this.httpClient.post("http://localhost:8080/api/surveys/create", body, {params: httpParams})
    // {
    //   params: httpParams
    // })
  }

  initLikesArray():boolean[]{
    let output_array: boolean[] = Array.apply(null, Array(this.likesArrayLen)).map(i => false);
    return output_array;
  }
}
