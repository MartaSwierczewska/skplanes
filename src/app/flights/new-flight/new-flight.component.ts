import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FlightFormComponent} from '../flight-form/flight-form.component';
import {FlightsService} from '../../core/services/flights.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.css']
})
export class NewFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent;

  constructor(
    private flighsService: FlightsService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewFlightComponent>) {
  }

  createFlight() {
    this.flighsService.addFlight(this.flightForm.form.value)
      .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open('Flight has been successfully created!', '', {panelClass: 'toast-success'});
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }
}
