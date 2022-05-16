import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { PersonData } from '../models/personModel';


@Injectable()
export class BookingService
{
    private _booking='http://localhost:30414/api/v1.0/flight/booking/GetAllBooking';
    private _bookFlightUrl='http://localhost:30414"/api/v1.0/flight/booking/';
    private _recordByEmailIdURL='/api/v1.0/flight/booking/history/';
    private _recordByPnrURL='/api/v1.0/flight/booking/ticket/';
    private _cancelTicket='/api/v1.0/flight/booking/cancel/'
    constructor(private http:HttpClient,private router:Router) {
               
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

    bookFlightForUser(user:any)
    {        
        var data={            
            name: user.name,
            emailId: user.emailId,
            noOfSeatBook: user.noOfSeatBook,            
            userDetail: user.userdetail,
            meal: user.meal,
            seatNo: user.seatNo,
            seatClass: user.seatClass,
            flightNumber: user.flightNumber,            
          }
        
        return this.http.post<any>(this._bookFlightUrl+user.flightNumber,data);
    }
    
}