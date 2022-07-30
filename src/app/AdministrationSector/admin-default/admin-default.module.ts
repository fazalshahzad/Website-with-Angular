import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDefaultComponent } from './admin-default.component';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../AdministrationComponents/dashboard/dashboard.component';
import { UserListComponent } from '../AdministrationComponents/user-list/user-list.component';
import { CreateProductComponent } from '../AdministrationComponents/create-product/create-product.component';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AdminDefaultComponent,
    DashboardComponent,
    UserListComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {maxOpened:1,
      autoDismiss:true}
    ),
  ]
})
export class AdminDefaultModule { }
