import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TraditionComponent } from './info/tradition/tradition.component';
import { ProductComponent } from './info/product/product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPecansComponent } from './info/about-pecans/about-pecans.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './info/product/payment/payment.component';
import { VideosComponent } from './videos/videos.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {
    path: 'production',
    component: AboutPecansComponent
  },
  {
    path: 'pricing',
    component: ProductComponent
  },
  {
    path: 'tradition',
    component: TraditionComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
    },
  // {
  //   path: 'videos',
  //   component: VideosComponent
  // },
  {
    path: 'home',
    pathMatch : 'full',
    redirectTo: ''
},
{
    path: '',
    component: HomePageComponent
},
{
    path: 'dashboard',
    component: DashComponent
}

  // {
  //   path: '',
  //   component: HomePageComponent
  // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
