import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './MainPageComponents/gallery/gallery.component';
import { HomeComponent } from './MainPageComponents/home/home.component';
import { ProductsComponent } from './MainPageComponents/products/products.component';
import { LandingComponent } from './UserSection/landing/landing.component';
import { UserLoginComponent } from './UserSection/user-login/user-login.component';
import { UserSignUpComponent } from './UserSection/user-sign-up/user-sign-up.component';

const routes: Routes = [
  // {path:'home',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'sign-up',component:UserSignUpComponent},
  
  {path:'', pathMatch:'full', component:LandingComponent},
  {path:'login', component:UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
