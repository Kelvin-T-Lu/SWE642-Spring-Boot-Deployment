import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyDisplayComponent } from './survey-display/survey-display.component';

const routes: Routes = [
  {path: '', component: SurveyPageComponent },
  {path: 'survey_page', component: SurveyPageComponent},
  {path: 'survey_display', component: SurveyDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
