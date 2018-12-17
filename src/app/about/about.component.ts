import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name : string;
  price :number;
  quatity : number;
  result = [];
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.result.push({name: this.name, price: this.price, quatity: this.quatity});
    this.name = null;
    this.price = null;
    this.quatity = null;

  }


}
