import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
   status: boolean;

  constructor() { }

  ngOnInit() {
  }
   personName(){
     console.log('hello');
   }
}
