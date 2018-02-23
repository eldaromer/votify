import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  options: any[] = [];
  name: string = '';
  title: string = '';

  constructor() { }

  ngOnInit() {
  }

  public addOption(option) {
    if(option !== '') {
      this.options.push(option);
      this.name='';
    }
  }

  public removeOption(option) {
    if (this.options.includes(option)) {
      this.options.splice(this.options.indexOf(option), 1);
    }
  }

}
