import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDefaultComponent } from './AdministrationSector/admin-default/admin-default.component';
import { CreateProductComponent } from './AdministrationSector/AdministrationComponents/create-product/create-product.component';
import { DashboardComponent } from './AdministrationSector/AdministrationComponents/dashboard/dashboard.component';
import { ProductAnalyticsComponent } from './AdministrationSector/AdministrationComponents/product-analytics/product-analytics.component';
import { UserListComponent } from './AdministrationSector/AdministrationComponents/user-list/user-list.component';
import { CartComponent } from './CartSection/cart/cart.component';
import { HomeComponent } from './MainPageComponents/home/home.component';
import { ProductsComponent } from './MainPageComponents/products/products.component';
import { UserLoginComponent } from './UserSection/user-login/user-login.component';
import { UserSignUpComponent } from './UserSection/user-sign-up/user-sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'sign-up',component:UserSignUpComponent},
  {path:'login', component:UserLoginComponent},

  {
    path:'administration-sector',component:AdminDefaultComponent,
    children:
    [
      {path:'',component:DashboardComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'user-list',component:UserListComponent},
      {path:'create-product',component:CreateProductComponent},
      {path:'product-analytics',component:ProductAnalyticsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


