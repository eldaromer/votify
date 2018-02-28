import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {CreateComponent} from "./create/create.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {path: 'index', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuardService]
  },
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', redirectTo: '/index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
