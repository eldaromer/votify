import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    alert("route guard lmao");
    return true;
  }

}
