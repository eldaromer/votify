// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.prod';
import 'rxjs/add/operator/filter';

@Injectable()
export class AuthService {

  constructor(public router: Router, public http: HttpClient) {}

  public login(username: string, password: string): void {
    this.http.post(environment.API_URL + '/user/login', {
      username: username,
      password: password
    }).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.error(err);
      }
    );
  }

  public signup(username: string, password: string): void {
    this.http.post(environment.API_URL + '/user/create', {
      username: username,
      password: password
    }).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.error(err);
      }
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public isAuthenticated() {
    return !(localStorage.getItem('token')===null);
  }

}
