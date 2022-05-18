import { JsonPipe } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { bookflightData } from '../models/bookflightModel';
import { PersonData } from '../models/personModel';


@Injectable()
export class BookingService
{
    private _booking='http://localhost:30414/api/v1.0/flight/booking/GetAllBooking';
    private _bookFlightUrl='http://localhost:30414/api/v1.0/flight/booking/';
    private _recordByEmailIdURL='http://localhost:30414/api/v1.0/flight/booking/history/';
    private _recordByPnrURL='http://localhost:30414/api/v1.0/flight/booking/ticket/';
    private _cancelTicket='http://localhost:30414/api/v1.0/flight/booking/cancel/'
    private _loginuserdetailURL='http://localhost:30414/api/v1.0/flight/authentication/loginuserdetail'
    constructor(private http:HttpClient,private router:Router) {
               
    }
    
    getloginUserDetail(username:any)
    {
        var link=this._loginuserdetailURL+"?user="+username+"";
        return this.http.get<any>(link);
    }
    cancelTicket(PNR:any)
    {
        return this.http.delete<any>(this._cancelTicket+PNR)
    }
    getTicketByPNR(PNR:any)
    {
        return this.http.get<any>(this._recordByPnrURL+PNR);
    }
    getAllBookingByEmailId(emailId:any)
    {
        return this.http.get<any>(this._recordByEmailIdURL+emailId);
    }
    getAllBooking()
    {
        return this.http.get<any>(this._booking);
    }
    
}

