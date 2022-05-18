import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { InventoryData } from "../models/inventoryModel";

@Injectable()
export class SharedData
{
    private bookSearchdata=InventoryData;
    
    /*constructor() {                
    }

    changeName(name:string)
    {
        this.bookSearchdata.next(name);
    }*/
}