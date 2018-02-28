import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public login() {
    this.auth.login(this.username, this.password);
  }



}
