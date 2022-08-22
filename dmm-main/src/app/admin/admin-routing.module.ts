import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddComponent } from './component/layout/add/add.component';
import { AddnewComponent } from './component/layout/addnew/addnew.component';
import { DetailComponent } from './component/layout/detail/detail.component';
import { EditComponent } from './component/layout/edit/edit.component';
import { ListComponent } from './component/layout/list/list.component';
import { MainComponent } from './component/layout/main/main.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'',component:MainComponent},
    {path:'admin/detail/:id',component:DetailComponent},
    {path:'admin/add',component:AddComponent},
    {path:'admin/edit/:id',component:EditComponent},
    {path:'admin/product/:id',component:ListComponent},
    {path:'admin/addnew',component:AddnewComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
