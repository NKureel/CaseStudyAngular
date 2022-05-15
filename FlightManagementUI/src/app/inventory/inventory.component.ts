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
  events=[]
  constructor(private _auth:InventoryService) { }

  ngOnInit(): void {   
      this._auth.getAllInventory().subscribe(res => {
       this.events=res   
      },
        err => console.log(err));      
  }
}
