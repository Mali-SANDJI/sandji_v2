import { Component } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {


  stations!: StationsComponent[];
  option!: string;
  inputs!: string[];
  dates!: string[];
  


  onOptionChange(option: string) {
    this.option = option;
  }

  onDateChange(date: string, index: number) {
    this.dates[index] = date;
  }
}
