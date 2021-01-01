import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../../../../../GitHub/Portfolio-JenHalvorson/src/app/about/about.component';
import { TraditionComponent } from './info/tradition/tradition.component';
import { ProductComponent } from './info/product/product.component';

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
    path: 'traditon',
    component: TraditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
