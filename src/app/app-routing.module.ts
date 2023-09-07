import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {
      component:HomeComponent,
      path:'nk'
  },
  
  {
     component:AboutComponent,
     path:'about'
  },

  {
     component:BlogComponent,
     path:'blog'
  },

  {
     component:CareersComponent,
     path:'careers'
  },

  {
    component:ContactComponent,
    path:'contact'
  },

  {
    component:FaqComponent,
    path:'faq'
  },

  {
    component:OffersComponent,
    path:'offers'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
