import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [FlightsComponent, FlightCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FlightsComponent]
})
export class FlightsModule { }
