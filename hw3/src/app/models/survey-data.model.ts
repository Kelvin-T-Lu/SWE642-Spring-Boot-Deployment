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
    likes: boolean[] = [false, false, false, false, false, false];
    interest: string = '';
    recommend: string = '';
    comments: string = '';
}
