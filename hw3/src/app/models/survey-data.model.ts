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
    likes: boolean[] = Array.apply(null, Array(6)).map(i=>false);
    interest: string = '';
    recommend: string = '';
    comments: string = '';
}
