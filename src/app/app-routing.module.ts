import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TraditionComponent } from './info/tradition/tradition.component';
import { ProductComponent } from './info/product/product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPecansComponent } from './info/about-pecans/about-pecans.component';
import { ToolbarComponent } from '../../../../../Arvid_8_3_2020/ArvidManage/src/app/shared/app-layouts/shared/component/toolbar/toolbar.component';

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
