import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class InventoryService
{
    private _inventoryURL='http://localhost:30414/api/v1.0/flight/airline/inventory';
    private _addInventoryUrl='http://localhost:30414/api/v1.0/flight/airline/inventory/add';
    private _searchFlightURL='http://localhost:30414/api/v1.0/flight/search';
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
        var data={            
                flightNumber: inventory.flightNumber,                
                airlineNo: inventory.airlineNo,
                fromPlace: inventory.FromPlace,
                toPlace: inventory.toPlace,
                startDateTime:inventory.startDateTime,
                endDateTime: inventory.endDateTime,
                scheduleDays: inventory.scheduleDays,
                instrumentUsed: inventory.instrumentUsed,
                businessClassSeat:inventory.businessClassSeat,
                nonBusinessClassSeat: inventory.nonBusinessClassSeat,
                ticketCost: inventory.ticketCost,
                noOfRows: inventory.noOfRows,
                meal: inventory.meal
              
        }
        return this.http.post<any>(this._addInventoryUrl,data);
    }
    
}