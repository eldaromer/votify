import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {CreateComponent} from "./create/create.component";
import {AuthGuardService} from "./auth/auth-guard.service";

const routes: Routes = [
  {path: 'index', component: MainComponent},
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
