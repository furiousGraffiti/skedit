import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposerComponent } from './composer/composer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { title: 'Home' }},
  { path: 'sign-in', component: SignInComponent, data: { title: 'Sign in' }},
  { path: 'sign-up', component: SignUpComponent, data: { title: 'Sign up' }},
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }},
  { path: 'composer', component: ComposerComponent, data: { title: 'Composer' }},
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page not found'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
