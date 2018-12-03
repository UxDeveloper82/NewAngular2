import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About Page';
  name = 'Hello World';
  constructor() { }

  ngOnInit() {
  }

  greetingPerson() {
    alert('welcome');
  }

}
