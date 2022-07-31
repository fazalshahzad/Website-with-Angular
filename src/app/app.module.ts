import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MainPageComponents/navbar/navbar.component';
import { FooterComponent } from './MainPageComponents/footer/footer.component';
import { UserLoginComponent } from './UserSection/user-login/user-login.component';
import { UserSignUpComponent } from './UserSection/user-sign-up/user-sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './MainPageComponents/products/products.component';
import { GalleryComponent } from './MainPageComponents/gallery/gallery.component';
import { HomeComponent } from './MainPageComponents/home/home.component';
import { CartComponent } from './CartSection/cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
// import {AdminDefaultModule } from './AdministrationSector/admin-default/admin-default.module'; //this one to copy?
import { RouterModule } from '@angular/router';
import { CreateProductComponent } from './AdministrationSector/AdministrationComponents/create-product/create-product.component';
import { ProductAnalyticsComponent } from './AdministrationSector/AdministrationComponents/product-analytics/product-analytics.component';
// import { LandingComponent } from './UserSection/landing/landing.component';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { environment } from '../environments/environment';
// import { AngularFirestore } from '@angular/fire/compat/firestore';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UserLoginComponent,
    UserSignUpComponent,
    ProductsComponent,
    GalleryComponent,
    HomeComponent,
    CartComponent
    //must remember to remove all declaration of private sector like dashboard!
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    // AngularFireModule.initializeApp(environment.Firebase),
    // AngularFireAnalyticsModule,
    // AngularFirestoreModule,
    ToastrModule.forRoot(
      {maxOpened:1,
      autoDismiss:true}
    ),
    // AdminDefaultModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }