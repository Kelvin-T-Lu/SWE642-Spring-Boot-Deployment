import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyMethodsService {

  likesArrayLen:number = 6;
  likesArray:string[] = ["Student", "Location", "Campus", "Atmostphere", "Dorms", "Sports"];

  constructor() {}
  
  initLikesArray():boolean[]{
    let output_array: boolean[] = Array.apply(null, Array(this.likesArrayLen)).map(i => false);
    return output_array;
  }
}
