import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }
  pushRow:Array<number>=new Array<number>();
  ngOnInit(): void {
  }
  AddRow()
  {
    this.pushRow.push(1);
  }
}
