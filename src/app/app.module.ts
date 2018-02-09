import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {AuthService} from "./auth/auth.service";
import { CreateComponent } from './create/create.component';
import {AuthGuardService} from "./auth/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
