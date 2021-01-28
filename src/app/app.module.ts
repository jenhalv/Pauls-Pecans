import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatSidenavModule } from '@angular/material/sidenav';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { InfoComponent } from './info/info.component';
import { RecipesComponent } from './recipes/recipes.component';

import { ProductComponent } from './info/product/product.component';
import { PaymentComponent } from './info/product/payment/payment.component';
import { PricingComponent } from './info/product/pricing/pricing.component';

import { TraditionComponent } from './info/tradition/tradition.component';

import { AboutPecansComponent } from './info/about-pecans/about-pecans.component';
import { KitComponent } from './info/about-pecans/kit/kit.component';
import { VideosComponent } from './info/about-pecans/videos/videos.component';

import { ContactComponent } from './contact/contact.component';
import { OrderHeaderComponent } from './contact/order-header/order-header.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';

import { FooterComponent } from './footer/footer.component';
import { ProductInfoComponent } from './info/product/product-info/product-info.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './toolbar/sidenav/sidenav.component';
import { MailComponent } from './info/product/payment/mail/mail.component';
import { PaypalComponent } from './info/product/payment/paypal/paypal.component';
import { CashComponent } from './info/product/payment/cash/cash.component';

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
    FooterComponent,
    PricingComponent,
    PaymentComponent,
    ContactComponent,
    KitComponent,
    VideosComponent,
    ContactFormComponent,
    ContactInfoComponent,
    OrderHeaderComponent,
    ToolbarComponent,
    SidenavComponent,
    ProductInfoComponent,
    MailComponent,
    PaypalComponent,
    CashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'paulspecans'),
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
