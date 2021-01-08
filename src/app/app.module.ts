import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { RecipesComponent } from './recipes/recipes.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

import { ProductComponent } from './info/product/product.component';
import { TraditionComponent } from './info/tradition/tradition.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPecansComponent } from './info/about-pecans/about-pecans.component';
import { ToolbarComponent } from './info/toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './toolbar/sidenav/sidenav.component';

const ANGULAR_MATERIAL_MODULES = [
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatExpansionModule,
  MatDividerModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    RecipesComponent,
    ProductComponent,
    TraditionComponent,
    HomePageComponent,
    AboutPecansComponent,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    ANGULAR_MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
