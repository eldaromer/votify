import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthService) { }

  public signup() {
    this.auth.signup(this.username, this.password)
  }

  ngOnInit() {
  }

}
