import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SiderbarComponent } from './component/layout/siderbar/siderbar.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { BannerComponent } from './component/layout/banner/banner.component';
import { MainComponent } from './component/layout/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/layout/footer/footer.component';
import { DetailComponent } from './component/layout/detail/detail.component';
import { AddComponent } from './component/layout/add/add.component';
import { EditComponent } from './component/layout/edit/edit.component';
import { ListComponent } from './component/layout/list/list.component';
import { SearchPipe } from './search.pipe';
import { AddnewComponent } from './component/layout/addnew/addnew.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SiderbarComponent,
    BannerComponent,
    MainComponent,
    FooterComponent,
    DetailComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    SearchPipe,
    AddnewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule
  ]
})
export class AdminModule { }
