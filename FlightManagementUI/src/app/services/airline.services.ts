import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class AirlineService
{
    private _airlineUrl='http://localhost:30414/api/v1.0/flight/airline';
    private _registerAirlineUrl='http://localhost:30414/api/v1.0/flight/airline/register';    
    private _blockAirlineURL='http://localhost:30414/api/v1.0/flight/airline/block/';
    constructor(private http:HttpClient,private router:Router) {
               
    }

    getAllAirline()
    {
        return this.http.get<any>(this._airlineUrl);
    }

    registerAirline(airlinedetail:any)
    {   
        debugger;     
       var  data={
        airlineNo: airlinedetail.airlineNo,
        uploadLogo:airlinedetail.uploadLogo,
        contactNumber: airlinedetail.contactNumber,
        contactAddress: airlinedetail.contactAddress 
        }
        return this.http.post<any>(this._registerAirlineUrl,data);
    }

    blockAirline(id:any,airlineno:any)
    {
        debugger;
        return this.http.delete<any>(this._blockAirlineURL+airlineno,id);
    }
    
}