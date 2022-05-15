import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../models/registerModel';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'  
})
export class RegisterComponent {

  registerUserData:RegisterModel=new RegisterModel();
  constructor(private _auth:AuthService,private _router:Router) { }

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(res => {
      localStorage.setItem('token', res.token)  
      alert("Register Successfully")               
    },
      err => console.log(err));
  }
  
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.registerUserData.formRegisterGroup.controls[controlname].hasError(typeofvalidator);
  }
}
