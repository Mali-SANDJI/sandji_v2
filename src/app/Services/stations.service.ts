import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  private apiUrl = 'http://example.com/api/stations'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getStations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addStation(station: any): Observable<any> {
    return this.http.post(this.apiUrl, station);
  }

  updateStation(station: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${station.id}`, station);
  }

  deleteStation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
