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
    debugger;
    var data={
      userName:this.registerUserData.userName,
      email:this.registerUserData.email,
      password:this.registerUserData.password
    }
    var result;
    this._auth.registerUser(data).subscribe(res => {
      //localStorage.setItem('token', res.token)  
      result=alert("Register Successfully !! Please login")   
      this._router.navigate(['\login']);                  
    },
      err => alert(err.error.message));
      var logindata={
        userName:this.registerUserData.userName,
        password:this.registerUserData.password
      }
     // this._auth.loginUser(logindata).subscribe(res => {
       // localStorage.setItem('token', res.token)                    
      
  }
  


  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.registerUserData.formRegisterGroup.controls[controlname].hasError(typeofvalidator);
  }
}
