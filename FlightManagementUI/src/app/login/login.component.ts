import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'  ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginUserData:UserData=new UserData();
  values: string='';
  constructor(private _auth:AuthService,private _router:Router) { }

  onKey(event: any) { // without type info
    this.values += event.target.value;
  }
  register()
  {
    this._router.navigate(['/register']);
  }
  loginUser() {    
    this._auth.loginUser(this.loginUserData).subscribe(res => {
      localStorage.setItem('token', res.token)      
      if(this.values==='naina.kureel@gmail.com')
      {        
      localStorage.setItem('isAdmin', 'true');
      this._router.navigate(['/airline'])     
      }
      else
      {
        localStorage.setItem('isAdmin', 'false');
      this._router.navigate(['/home'])
      }
    },
      err => console.log(err));
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.loginUserData.formloginGroup.controls[controlname].hasError(typeofvalidator);
  }

}
