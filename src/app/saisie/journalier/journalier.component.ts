import { Component } from '@angular/core';
import { StationsComponent } from 'src/app/stations/stations.component';

@Component({
  selector: 'app-journalier',
  templateUrl: './journalier.component.html',
  styleUrls: ['./journalier.component.css']
})
export class JournalierComponent {

  stations!: StationsComponent[];
  // option!: string;
  // inputs: string[] = [];
  // dates: string[] = [];


  // onOptionChange(option: string) {
  //   this.option = option;
  // }

  // onDateChange(date: string, index: number) {
  //   this.dates[index] = date;
  // }

}
