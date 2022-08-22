import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard2Component } from './component/dashboard2/dashboard2.component';
import { CartComponent } from './component/layout/cart/cart.component';
import { ContactComponent } from './component/layout/contact/contact.component';
import { DetailEventComponent } from './component/layout/detail-event/detail-event.component';
import { DetailComponent } from './component/layout/detail/detail.component';
import { DeviceComponent } from './component/layout/device/device.component';
import { IntroduceComponent } from './component/layout/introduce/introduce.component';
import { LoginComponent } from './component/layout/login/login.component';
import { MainComponent } from './component/layout/main/main.component';
import { MenuComponent } from './component/layout/menu/menu.component';
import { NewlistComponent } from './component/layout/newlist/newlist.component';
import { SignupComponent } from './component/layout/signup/signup.component';

const routes: Routes = [
  {path:'',component:Dashboard2Component,children:[
    {path:'',component:MenuComponent},
    {path:'product/:id',component:MainComponent},
    {path:'main',component:MainComponent},
    {path:'detailEvent/:id',component:DetailEventComponent},
    {path:'detail/:id',component:DetailComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'introduce',component:IntroduceComponent},
    {path:'device',component:DeviceComponent},
    {path:'contact',component:ContactComponent},
    {path:'newlist',component:NewlistComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
