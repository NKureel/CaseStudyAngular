import { EmitterVisitorContext } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';
import { InventoryData } from '../models/inventoryModel';
import { InventoryService } from '../services/inventory.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inventoryData: InventoryData = new InventoryData();
  inventoryModellist: Array<InventoryData> = new Array<InventoryData>();
  errorRes:string='';
  IsError:boolean=false;
  IsSearch:boolean=false;
  constructor(private _service: InventoryService,private _router:Router) {
    
    //this._service.getAllInventory().subscribe(res=>this.Success(this.inventoryModellist=res),err=>console.log(err))
   }
  //rowData = [];  
  ngOnInit(): void {
    
  }
  IsAlert:Boolean=false;
  alerts:string='';
  SearchInventoyr() {
    if(this.inventoryData.fromPlace===""|| this.inventoryData.toPlace===""||this.inventoryData.startDateTime==""||this.inventoryData.endDateTime==='')
    {
      //this.alerts="Please fill the fields";      
      //this.IsAlert=true;
      alert("Please fill the dettails");
      return;
    }
    
  //console.log(this.inventoryModellist.filter(s=>s.toPlace==this.inventoryData.toPlace && s.fromPlace==this.inventoryData.fromPlace))
    this._service.getFlightByPlaces(this.inventoryData.fromPlace,this.inventoryData.toPlace).subscribe(res=>{
      this.IsSearch=true;
      this.Success(res)},err=>{        
      this.IsSearch=true;
      this.Error(err);
      })
  }

 
  @Output() book=new EventEmitter<InventoryData>();
  bookFlight(index:any,detail:any)
  {
    this.book.emit(detail);
    if(localStorage.getItem("token")!=null)
    this._router.navigate(["/booking"]);
    else
    this._router.navigate(["/login"]);
  }
  GetAllInventory(){
    this._service.getAllInventory().subscribe(res=>this.Success(res),err=>this.Error(err));   
  }
  Error(err:any)
  {
    this.IsError=true;
    this.errorRes="Failed to find flights";
    
  }
  Success(res:any)
  {
    this.inventoryModellist=res;
  }
}


