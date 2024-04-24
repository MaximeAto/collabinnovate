import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './bloc/footer/footer.component';
import { HeaderComponent } from './bloc/header/header.component';
import { AddproblemComponent } from './pages/addproblem/addproblem.component';
import { SubmitsolutionComponent } from './pages/submitsolution/submitsolution.component';
import { ProblemsComponent } from './pages/problems/problems.component';


// primeng


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    AddproblemComponent,
    SubmitsolutionComponent,
    ProblemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
