
import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnChanges {
  @Input() city: string = '';
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.city) {
      this.weatherService.getCurrentWeather(this.city).subscribe(data => {
        this.weather = data;
      });
    }
  }
}
