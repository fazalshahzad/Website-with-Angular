import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // email:any;
  // password:any;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });


  constructor() { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }





  //  loginUser(){
  //    if(this.email === "user@website.com" && this.password == "123456789"){
  //    console.log('Welcome Dear Customer!');
  //    }
  //    console.log('User not found!');
  // }

}
