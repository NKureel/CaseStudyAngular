import { Component, OnInit } from '@angular/core';
import { __metadata } from 'tslib';
import { PersonData } from '../models/personModel';
import { SharedData } from '../shared/shared.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']  
})
export class BookingComponent implements OnInit {

  persondataItem:PersonData=new PersonData();
   inventoryData:any
  personlist:Array<PersonData>=new Array<PersonData>();
  constructor(private _data:SharedData) { 
    
  }
   personArray:Array<PersonData>=new Array<PersonData>();
  ngOnInit(): void {
    this._data.bookSearchdata.subscribe(res=>{this.inventoryData=res});
  }
  AddRow()
  {
    debugger;
    this.persondataItem=new PersonData();
    this.personArray.push(this.persondataItem);
  }
  DeletRow(index:any)
  {
    this.personArray=this.personArray.slice(index);
    return this.personArray;
    
  }
}
