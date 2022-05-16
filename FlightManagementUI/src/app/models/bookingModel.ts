import { PersonData } from "./personModel";

export class BookingData
{
   name:string='';
    emailId:string='';
    noOfSeatBook:number=0;
    peopleId:number=0;
    meal:string='';
    seatNo:string='';
    seatClass:string='';
    flightNumber:string='';  
    userdetail:Array<PersonData>=new Array<PersonData>();  
}