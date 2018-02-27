import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  polls: any[] = [{name: 'poll1'}, {name: 'poll2'}];
  redirect;

  constructor(public auth: AuthService, private router: Router) {


  }

  ngOnInit() {
  }

}
