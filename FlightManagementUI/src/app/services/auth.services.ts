import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService
{
    private _loginUrl='https://localhost:44355/api/Users/login';
    private _registerUrl='';
    constructor(private http:HttpClient,private router:Router) {
               
    }

    loginUser(user:any)
    {
        debugger;
        return this.http.post<any>(this._loginUrl,user);
    }

    registerUser(user:any)
    {
        return this.http.post<any>(this._registerUrl,user);
    }

    logoutUser()
    {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        this.router.navigate(['/home']);
    }

    getToken()
    {
        return localStorage.getItem('token');
    }

    adminDetail()
    {               
        return localStorage.getItem('isAdmin');
    }
    loggedIn()
    {
        return !!localStorage.getItem('token');
    }
}