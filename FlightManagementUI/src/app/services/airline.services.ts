import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class AirlineService
{
    private _airline='';
    private _registerAirlineUrl='';
    private _blockAirlineURL='';
    constructor(private http:HttpClient,private router:Router) {
               
    }

    getAllAirline()
    {
        return this.http.get<any>(this._airline);
    }

    registerAirline(airlinedetail:any)
    {
        return this.http.post<any>(this._registerAirlineUrl,airlinedetail);
    }

    blockAirline(id:any)
    {
        return this.http.delete<any>(this._blockAirlineURL,id);
    }
    
}