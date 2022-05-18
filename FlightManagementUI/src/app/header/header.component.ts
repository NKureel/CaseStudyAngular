import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
imageUrl='../../assets/Images/plane.png';
 admin:any='false';
constructor(private _authService:AuthService,private _router:Router) { }

LogOut()
{
  return this._authService.logoutUser();
}
isAdmin()
{  
  this.admin=this._authService.adminDetail(); 
   if(this.admin==='true' && this.admin!=null)
   return true;
   else
   return false;
}
LoggedIn(input:boolean)
{
  if(input)
  {          
  return this._authService.loggedIn();
  }
  else
  return !this._authService.loggedIn();
}
  ngOnInit(): void {
  }
  history()
  {
    if(localStorage.getItem("user")!=="admin")
    this._router.navigate(["history"])
    else
    {
      alert("Please login as user");
    this._router.navigate(["login"])
    }
  }
}
