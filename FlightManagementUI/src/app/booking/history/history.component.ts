import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingData } from 'src/app/models/bookingModel';
import { SearchDataModel } from 'src/app/models/searchModel';
import { BookingService } from 'src/app/services/booking.services';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  booking:BookingData=new BookingData();
  ticketList:Array<SearchDataModel>=new Array<SearchDataModel>();
  inputText:string=''
  IsSearch:boolean=false;
  constructor(private _service:BookingService,private _route:Router) { }
  CancelTicket(index:any,detail:any)
  {
    debugger;
    this.ticketList.slice(index,1);
    this._service.cancelTicket(detail.pnr).subscribe(res=>
      {    
        alert("Blocked Successfully"),
        this._route.navigate(["\history"]).then(()=>{window.location.reload()})  
      },err=>console.log(err));
  }
  SearchDetail(text:string)
  {
    debugger;
    if(text==="")
    alert("Enter detail");
    if(text.includes("PNR"))
    {
      this._service.getTicketByPNR(text).subscribe(res=>{
        this.ticketList=res;
        this.IsSearch=true;
      },err=>console.log(err));
      
    }
    else{
      this._service.getAllBookingByEmailId(text).subscribe(res=>{
        this.ticketList=res
        this.IsSearch=true;
      },err=>console.log(err));
      
    }
   
  }
 
  ngOnInit(): void {
  }

}
