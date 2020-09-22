import {Component} from '@angular/core';
import {FlightsService} from '../core/services/flights.service';
import {Observable} from 'rxjs';
import {Flight} from '../models/flight.model';
import {MatDialog} from '@angular/material/dialog';
import {NewFlightComponent} from './new-flight/new-flight.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent {
  flights$: Observable<Flight[]> = this.flightsService.getFlights();

  constructor(
    private dialog: MatDialog,
    private flightsService: FlightsService) {
  }

  openNewFlightModal() {
    this.dialog.open(NewFlightComponent);
  }
}
