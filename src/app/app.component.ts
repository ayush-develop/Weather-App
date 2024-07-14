
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCity: string = '';

  onCitySelected(city: string) {
    this.selectedCity = city;
  }
}
