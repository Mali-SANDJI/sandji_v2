import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StationsComponent } from 'src/app/stations/stations.component';

@Component({
  selector: 'app-journalier',
  templateUrl: './journalier.component.html',
  styleUrls: ['./journalier.component.css']
})
export class JournalierComponent implements OnInit {

  stationsForm!: FormGroup;
  stations: any[] = []; // Add this line

  ngOnInit() {
    this.stationsForm = new FormGroup({
      stationName: new FormControl(''),
      dailyInput: new FormControl('')
    });

     // Populate the stations array here
     this.stations = [
      {name: 'Station 1'},
      {name: 'Station 2'},
      // Add more stations as needed
    ];
  }

  onSubmit() {
    // Handle form submission here
  }

}
