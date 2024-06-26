import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RegistirationComponent } from './Components/registiration/registiration.component';
import { ProductsComponent } from './Components/products/products.component';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddProductComponent } from './Components/dashboard/add-product/AddProductComponent';
import { LoginComponent } from './Components/login/login.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"products/:id/edit",component:AddProductComponent},
  {path:"login",component:LoginComponent},
  {path:"cart",component:CartComponent},
  {path:"products/:id/edit",component:AddProductComponent},
  {path:"registiration",component:RegistirationComponent},
  {path:"wish",component:WishListComponent},
  {path:"product/:id",component:ProductDetailsComponent}

];
