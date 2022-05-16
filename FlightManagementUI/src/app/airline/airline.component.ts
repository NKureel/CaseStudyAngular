import { Component, OnInit } from '@angular/core';
import { AirlineData } from '../models/airlineModel';
import { AirlineService } from '../services/airline.services';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  airlineData:AirlineData=new AirlineData();
  airlineModellist:Array<AirlineData>=new Array<AirlineData>();
  IsError:boolean=false;
  errorRes:string='';
  constructor(private _auth:AirlineService) { }

  ngOnInit(): void {   
      this._auth.getAllAirline().subscribe(res => {
       this.airlineModellist=res
      },
        err =>{ this.IsError=false,this.errorRes=err.error.message});      
  }
}


