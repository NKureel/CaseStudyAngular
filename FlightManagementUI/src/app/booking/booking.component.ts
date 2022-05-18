import { Component, OnInit } from '@angular/core';
import { PersonData } from '../models/personModel';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']  
})
export class BookingComponent implements OnInit {

  persondataItem:PersonData=new PersonData();
  personlist:Array<PersonData>=new Array<PersonData>();
  constructor() { }
   personArray:Array<PersonData>=new Array<PersonData>();
  ngOnInit(): void {
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
