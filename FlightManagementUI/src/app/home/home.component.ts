import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  constructor() { }
  //rowData = [];
  
  ngOnInit(): void {

    /*fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);*/      
  }  
}
