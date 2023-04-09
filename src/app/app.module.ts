import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchMaxPricePipe } from './pipes/search-max-price.pipe';
import { SearchMinPricePipe } from './pipes/search-min-price.pipe';
import { ClockComponent } from './pages/clock/clock.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrandWarrantyComponent } from './pages/brand-warranty/brand-warranty.component';
import { ShopComponent } from './pages/shop/shop.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { WarrantyComponent } from './pages/warranty/warranty.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPipe,
    SearchMaxPricePipe,
    SearchMinPricePipe,
    ClockComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent,
    AboutComponent,
    ContactComponent,
    BrandWarrantyComponent,
    ShopComponent,
    FinanceComponent,
    WarrantyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
