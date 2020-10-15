import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Flight} from '../../models/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FlightCardComponent {
  @Input() flight: Flight;
  math = Math;
}
