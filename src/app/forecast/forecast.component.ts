
import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnChanges {
  @Input() city: string = '';
  forecast: any;

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.city) {
      this.weatherService.getForecast(this.city).subscribe(data => {
        this.forecast = data.forecast.forecastday;
      });
    }
  }
}
