import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { __metadata } from 'tslib';
import { bookflightData } from '../models/bookflightModel';
import { BookingData } from '../models/bookingModel';
import { PersonData } from '../models/personModel';
import { RegisterModel } from '../models/registerModel';
import { BookingService } from '../services/booking.services';
import { SharedData } from '../shared/shared.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']  
})
export class BookingComponent implements OnInit {
  bookingdetail:BookingData=new BookingData();
  persondataItem:PersonData=new PersonData();
   inventoryData:any
  personlist:Array<PersonData>=new Array<PersonData>();
  constructor(private _data:SharedData,private _service:BookingService,private http:HttpClient) { 
    
  }
   personArray:Array<PersonData>=new Array<PersonData>();
  ngOnInit(): void {
    
    this._data.book.subscribe(res=>{this.inventoryData=res});
  }
  AddRow()
  {
    
    this.persondataItem=new PersonData();
    this.personArray.push(this.persondataItem);
  }
  DeletRow(index:any)
  {
    this.personArray=this.personArray.slice(index);
    return this.personArray;
    
  }
  data:RegisterModel=new RegisterModel();
  userbook:any={};
  userbookarr:any=[];
  user:any;
  submit()
  {
    debugger;
    var name;
    if(localStorage.getItem('user')==null)
    {
      this.bookingdetail.emailId='user@gmail.com'
    this.bookingdetail.name='user';
    }
    else
    {
      
      name=localStorage.getItem('user');
      this.bookingdetail.name=String(name);
      this._service.getloginUserDetail(name).subscribe(Res=>{this.data=Res},err=>console.log(err));
      this.bookingdetail.emailId=this.data.email;      
    }
    this.bookingdetail.flightNumber=this.inventoryData.flightNumber;
    this.bookingdetail.meal=this.inventoryData.meal;
    this.bookingdetail.noOfSeatBook=this.personArray.length;
    this.bookingdetail.userdetail=this.personArray;
    this.user=this.bookingdetail;
    var count=0;
    
    this.user.userdetail.forEach( (value: { firstName: any; lastName: any; gender: any; age: any; class: any; }) =>{            
      this.userbookarr.push(
          {                    
              name:this.user.name,
            emailId:this.user.emailId,                    
// this.book.meal=user.personArray[i].meal,
      flightNumber:this.user.flightNumber,                    
 firstName:value.firstName,
 lastName:value.lastName,
 gender:value.gender,
 age:Number(value.age),
  class:value.class  
          }
      )}
  )
   
  this.http.post("http://localhost:30414/api/v1.0/flight/booking/123",this.userbookarr).subscribe(res=>alert(res),err=>console.log(err));
    //this._service.bookFlightForUser(this.userbookarr).subscribe(res=>alert(res),err=>console.log(err));
  }
}
