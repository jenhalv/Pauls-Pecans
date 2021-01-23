import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { PaymentComponent } from './info/product/payment/payment.component';
import { PricingComponent } from './info/product/pricing/pricing.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './info/toolbar/sidenav/sidenav.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ContactComponent } from './contact/contact.component';
import { KitComponent } from './info/about-pecans/kit/kit.component';
import { VideosComponent } from './info/about-pecans/videos/videos.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { InvoicesComponent } from './invoices/invoices.component';
import { environment } from '../environments/environment';

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
    SidenavComponent,
    PricingComponent,
    PaymentComponent,
    ContactComponent,
    KitComponent,
    VideosComponent,
    ContactFormComponent,
    InvoicesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    YouTubePlayerModule,
    ANGULAR_MATERIAL_MODULES
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
