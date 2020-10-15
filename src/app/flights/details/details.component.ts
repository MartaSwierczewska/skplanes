import {Component, Inject, Input, OnInit} from '@angular/core';
import {Flight} from '../../models/flight.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  flight: Flight;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight
  ) {
    this.flight = data;
  }

  goToEditFlight() {
    this.close();
    this.router.navigate(['/dashboard/flights', this.flight.key]);
  }

  close() {
    this.dialogRef.close();
  }
}
