import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from './component/layout/header/header.component';
import { BannerComponent } from './component/layout/banner/banner.component';
import { Dashboard2Component } from './component/dashboard2/dashboard2.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './component/layout/main/main.component';
import { MenuComponent } from './component/layout/menu/menu.component';
import { DetailEventComponent } from './component/layout/detail-event/detail-event.component';
import { DetailComponent } from './component/layout/detail/detail.component';
import { LoginComponent } from './component/layout/login/login.component';
import { SignupComponent } from './component/layout/signup/signup.component';
import { SearchPipe } from './search.pipe';
import { TopComponent } from './component/layout/top/top.component';
import { IntroduceComponent } from './component/layout/introduce/introduce.component';
import { DeviceComponent } from './component/layout/device/device.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewlistComponent } from './component/layout/newlist/newlist.component';
import { ContactComponent } from './component/layout/contact/contact.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    Dashboard2Component,
    FooterComponent,
    MainComponent,
    MenuComponent,
    DetailEventComponent,
    DetailComponent,
    LoginComponent,
    SignupComponent,
    SearchPipe,
    TopComponent,
    IntroduceComponent,
    DeviceComponent,
    NewlistComponent,
    ContactComponent,
 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NgxSpinnerModule
  ]
})
export class CustomerModule { }
