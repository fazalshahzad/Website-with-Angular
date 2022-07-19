import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MainPageComponents/navbar/navbar.component';
import { HomeComponent } from './MainPageComponents/home/home.component';
import { FooterComponent } from './MainPageComponents/footer/footer.component';
import { UserLoginComponent } from './UserSection/user-login/user-login.component';
import { UserSignUpComponent } from './UserSection/user-sign-up/user-sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './MainPageComponents/products/products.component';
import { GalleryComponent } from './MainPageComponents/gallery/gallery.component';
import { LandingComponent } from './UserSection/landing/landing.component';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    UserLoginComponent,
    UserSignUpComponent,
    ProductsComponent,
    GalleryComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
