import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-news-details',
  // templateUrl: './news-details.component.html',
  template:`<p>You selected with id ={{newsId}}</p>`,
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  public newsId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.newsId = id;
  }

}
