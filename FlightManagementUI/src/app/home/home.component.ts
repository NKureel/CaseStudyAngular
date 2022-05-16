import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
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
    
      $(document).ready(function () {
       (<any> $('#dtDynamicVerticalScrollExample')).DataTable({
          "scrollY": "50vh",
          "scrollCollapse": true,
        });
        $('.dataTables_length').addClass('bs-select');
      });
    
    /*fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);*/      
  }  
}
