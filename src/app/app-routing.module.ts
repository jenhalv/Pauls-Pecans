import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TraditionComponent } from './info/tradition/tradition.component';
import { ProductComponent } from './info/product/product.component';
import { AboutComponent } from './info/about/about.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
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
    path: '',
    component: HomePageComponent
  }
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
