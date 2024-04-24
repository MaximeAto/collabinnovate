import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddproblemComponent } from './pages/addproblem/addproblem.component';
import { SubmitsolutionComponent } from './pages/submitsolution/submitsolution.component';
import { ProblemsComponent } from './pages/problems/problems.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'addproblem', component: AddproblemComponent},
  { path: 'submitsolution', component: SubmitsolutionComponent},
  { path: 'problems', component: ProblemsComponent},
  { path: '**', redirectTo: '' } // Redirection vers la page d'accueil si l'URL est invalide
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
