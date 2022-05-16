import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
  constructor(private _service: InventoryService) { }
  //rowData = [];  
  ngOnInit(): void {

    $(document).ready(function () {
      (<any>$('#dtDynamicVerticalScrollExample')).DataTable({
        "scrollY": "50vh",
        "scrollCollapse": true,
      });
      $('.dataTables_length').addClass('bs-select');
    });
  }
  IsAlert:Boolean=false;
  alerts:string='';
  SearchInventoyr() {
     
    
    if(this.inventoryData.fromPlace==''|| this.inventoryData.toPlace==''||this.inventoryData.startDateTime==''||this.inventoryData.endDateTime=='')
    {
      this.alerts="Please fill the fields";      
      this.IsAlert=true;
      return;
    }
    this.IsSearch=true;
    this._service.getFlightByPlaces(this.inventoryData.fromPlace,this.inventoryData.toPlace).subscribe(res=>this.Success(res),err=>console.log(err))
  }

  bookFlight(index:any,detail:any)
  {
    
  }
  GetAllInventory(){
    this._service.getAllInventory().subscribe(res=>this.Success(res),err=>this.Error(err));   
  }
  Error(err:any)
  {
    this.IsError=true;
    this.errorRes=err.error.message;
    
  }
  Success(res:any)
  {
    this.inventoryModellist=res;
  }
}
