import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LogonComponent } from './logon/logon.component';
import { LoginsComponent } from './logins/logins.component';
import { SignupsComponent } from './signups/signups.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { OwlComponent } from './owl/owl.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartsComponent } from './carts/carts.component';





@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    LoginsComponent,
    SignupsComponent,
    OwlComponent,
    DetailProductComponent,
    CartsComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    NgxStarRatingModule,
    CarouselModule,
    NgxSpinnerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
