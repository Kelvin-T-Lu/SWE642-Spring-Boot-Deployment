export class SurveyData {
    firstName: string = '';
    lastName: string = '';
    address: string = '';
    city: string = '' ;
    state: string = '';
    zip: number = 0;
    email: string = '';
    telephone: string = '';
    date: Date = new Date();
    likes: any[] = Array.apply(null, Array(6)).map(i=>"");
    interest: string = '';
    recommend: string = '';
    comments: string = '';
}
