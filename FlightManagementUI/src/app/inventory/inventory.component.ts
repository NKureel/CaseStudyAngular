import { Component, OnInit } from '@angular/core';
import { InventoryData } from '../models/inventoryModel';
import { InventoryService } from '../services/inventory.services';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryData:InventoryData=new InventoryData();
  inventoryModellist:Array<InventoryData>=new Array<InventoryData>();
  IsError:boolean=false;  
  errorRes:string='';
  constructor(private _auth:InventoryService) { }

  ngOnInit(): void {   
      this._auth.getAllInventory().subscribe(res => {
       this.inventoryModellist=res   
      },
        err => console.log(err));      
  }
  addInventory()
  {}
}
