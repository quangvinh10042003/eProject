import { FinanceComponent } from './pages/finance/finance.component';
import { WarrantyComponent } from './pages/warranty/warranty.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BrandWarrantyComponent } from './pages/brand-warranty/brand-warranty.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'brandWarranty',component:BrandWarrantyComponent},
  {path:'shop',component:ShopComponent},
  {path:'finance',component:FinanceComponent},
  {path:'shop/:id',component:ShopComponent},
  {path:'warranty/:id',component:WarrantyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
