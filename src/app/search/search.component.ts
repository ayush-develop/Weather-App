import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query: string = '';
  cities: any[] = [];

  @Output() citySelected = new EventEmitter<string>();

  constructor(private weatherService: WeatherService) {}

  onSearch(event: any) {
    this.query = event.target.value;
    if (this.query.length > 2) {
      this.weatherService.searchCities(this.query).subscribe(data => {
        this.cities = data;
      });
    }
  }

  selectCity(city: any) {
    this.citySelected.emit(city.name);
  }
}
