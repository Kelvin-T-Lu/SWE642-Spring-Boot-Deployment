import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SurveyComponent } from './survey/survey.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyDisplayComponent } from './survey-display/survey-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SurveyComponent,
    NavbarComponent,
    SurveyPageComponent,
    SurveyDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
