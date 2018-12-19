import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-list',
  // templateUrl: './news-list.component.html',
  template:`
      <h2>List of News</h2>
      <ul *ngFor="let new of news">
        <li (click)='onSelect(new)'>{{new.id}}{{new.title}}</li>
      </ul>
      `,
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public news = [];
  constructor(private newService: NewsService ,private router:Router) { }

  ngOnInit() {
    this.news = this.newService.getNews();
  }

}
