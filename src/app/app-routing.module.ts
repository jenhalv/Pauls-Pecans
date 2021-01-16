import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TraditionComponent } from './info/tradition/tradition.component';
import { ProductComponent } from './info/product/product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPecansComponent } from './info/about-pecans/about-pecans.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'about-pecans',
    component: AboutPecansComponent
  },
  {
    path: 'product',
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
    path: '',
    component: HomePageComponent
  },
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
