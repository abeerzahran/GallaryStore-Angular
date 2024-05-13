import { RegistirationComponent } from './Components/registiration/registiration.component';
import { ProductsComponent } from './Components/products/products.component';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddProductComponent } from './Components/dashboard/add-product/AddProductComponent';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"products/:id/edit",component:AddProductComponent},
  {path:"registiration",component:RegistirationComponent}

];
