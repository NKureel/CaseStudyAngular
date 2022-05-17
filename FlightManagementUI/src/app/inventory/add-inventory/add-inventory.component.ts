import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryData } from 'src/app/models/inventoryModel';
import { InventoryService } from 'src/app/services/inventory.services';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})


export class AddInventoryComponent implements OnInit {
  inventoryData:InventoryData=new InventoryData();
  constructor(private _service:InventoryService,private _route:Router) { }

  ngOnInit(): void {
  }

  Success()
  {
    alert("Add Successfully");
    this._route.navigate(["\inventory"]);
  }
  Error(res:any)
  {
    alert("Failed to add Inventory");
  }
  submitInventory()
  {
    debugger;
    return this._service.addInventory(this.inventoryData).subscribe(res=>this.Success(),err=>this.Error(err))
  }
}
