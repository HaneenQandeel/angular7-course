import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(){
    return [
      {"id":1,title : 'haneen' , description : ' description for the title in more than 100 word ' },
      {"id":2,title : 'walaa ' , description : ' description for the ' },
      {"id":3,title : 'salem ' , description : ' description for' },
      {"id":4,title : 'neven ' , description : '' }
    ];
  }
}
