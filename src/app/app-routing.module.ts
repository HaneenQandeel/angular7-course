import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import{NewsListComponent} from './news-list/news-list.component'
import {NewsDetailsComponent} from './news-details/news-details.component'


const routes: Routes = [
  {path:'about' ,component:AboutComponent},
  {path:'blog' ,component:BlogComponent},
  {path:'contact-us' ,component:ContactUsComponent},
  {path:'news/id:',component:NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
export const routingComponents = [AboutComponent,
  BlogComponent,ContactUsComponent,NewsListComponent,NewsDetailsComponent]
