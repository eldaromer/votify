// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class AuthService {

  constructor(public router: Router) {}

  public login(options: any = {}): void {
    alert("login");
  }

  public logout(): void {
    alert("logout")
  }

  public isAuthenticated() {
    return true;
  }

}
