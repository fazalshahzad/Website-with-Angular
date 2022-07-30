import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Website-with-Angular';

  _showNavbar = true;
  _showFooter = true;

 constructor(

  private _router:Router

 ){
  _router.events.forEach((event) => {
    if (event instanceof NavigationStart){
      if(
       event.url.startsWith("/administration") || 
       event.url.startsWith("/administration/") || 
       event.url.startsWith("/user") || 
       event.url.startsWith("/user/") 
      ){
        this._showNavbar = false;
        this._showFooter = false;
      } else{
        this._showNavbar = true;
        this._showFooter = true;
      } 
    }
  });
 } 
}
