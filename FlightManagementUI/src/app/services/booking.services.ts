import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class BookingService
{
    private _booking='';
    private _bookFlightUrl='';
    private _recordByEmailIdURL='';
    private _recordByPnrURL='';
    constructor(private http:HttpClient,private router:Router) {
               
    }
    
    getTicketByPNR(PNR:any)
    {
        return this.http.get<any>(this._recordByPnrURL,PNR);
    }
    getAllBookingByEmailId(emailId:any)
    {
        return this.http.get<any>(this._recordByEmailIdURL,emailId);
    }
    getAllBooking()
    {
        return this.http.get<any>(this._booking);
    }

    bookFlightForUser(user:any)
    {
        return this.http.post<any>(this._bookFlightUrl,user);
    }
    
}