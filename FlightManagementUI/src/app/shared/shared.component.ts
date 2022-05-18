import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { InventoryData } from "../models/inventoryModel";

@Injectable()
export class SharedData
{
      bookSearchdata=new BehaviorSubject<InventoryData>(new InventoryData());
      book=this.bookSearchdata.asObservable();
      constructor()
      {}
        changeName(book:any)
        {
            this.bookSearchdata.next(book);
        }
    /*constructor() {                
    }

    changeName(name:string)
    {
        this.bookSearchdata.next(name);
    }*/
}