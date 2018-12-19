import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  // templateUrl: './new.component.html',
  template :`
       <h2>News</h2>
       <p>{{new.title}}{{new.description}}</p>
  `,
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
