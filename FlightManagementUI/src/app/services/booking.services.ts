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

    count: number=0
    bookingDetail:bookflightData=new bookflightData();
    bookFlightForUser(user:any)
    {     
        debugger; 
        var data:Array<any>=new Array<any>();
        var sample:object=new Object();  
        user.userdetail.forEach( (value: { firstName: any; lastName: any; gender: any; age: any; class: any; }) =>{            
           
            this.bookingDetail.name=user.name,
            this.bookingDetail.emailId=user.emailId,
            this.bookingDetail.flightNumber=user.flightNumber, 
            this.bookingDetail.firstName=value.firstName,
            this.bookingDetail.lastName=value.lastName,
            this.bookingDetail.gender=value.gender,
            this.bookingDetail.age=Number(value.age),
            this.bookingDetail.class=value.class  
            data.push(this.bookingDetail);            
            //this.book=new bookflightData();
          }  )   
          /*for(var i=0;i<user.userdetail.length;i++)
          {           
              this.book.name=user.name,
              this.book.emailId=user.emailId,                    
             // this.book.meal=user.personArray[i].meal,
              this.book.flightNumber=user.flightNumber,                    
                    
               data.push(this.book);            
               this.book=new bookflightData();
           }   */
      
        
        var link=this._bookFlightUrl+"1234";
        JSON.stringify(data);
        var options={
            body:data
        }
        return this.http.post<any>(link,options);
    }
    
}

function foreach() {
    throw new Error('Function not implemented.');
}
