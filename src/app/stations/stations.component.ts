import { Component } from '@angular/core';
import { Station } from './station';
import { FormControl, FormGroup } from '@angular/forms';
import { StationsService } from '../Services/stations.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {

  displayedColumns: string[] = ['code_station', 'nom_station', 'long', 'lat', 'actions'];
  dataSource = [];

  constructor(private stationService: StationsService) { }

  ngOnInit(): void {
    this.getStations();
  }

  getStations(): void {
    this.stationService.getStations().subscribe((stations: never[]) => {
      this.dataSource = stations;
    });
  }

  addStation(): void {
    // Add your add station logic here
  }

  updateStation(station: any): void {
    // Add your update station logic here
  }

  deleteStation(id: number): void {
    this.stationService.deleteStation(id).subscribe(() => {
      this.getStations();
    });
  }

}
