import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class InventoryService
{
    private _inventoryURL='';
    private _addInventoryUrl='';
    private _searchFlightURL='';
    constructor(private http:HttpClient,private router:Router) {
               
    }

    getFlightByPlaces(toplace:any,fromplace:any)
    {
        let httparms=new HttpParams().set("toplace",toplace);
        httparms.set('fromplace',fromplace);
        let options={params:httparms};
        return this.http.get<any>(this._searchFlightURL,options);
    }
    getAllInventory()
    {
        return this.http.get<any>(this._inventoryURL);
    }

    addInventory(inventory:any)
    {
        return this.http.post<any>(this._addInventoryUrl,inventory);
    }
    
}