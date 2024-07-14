
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
private apiKey = '73880a616f384be5ae672015241407';
  private apiUrl = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) { }

  searchCities(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.json?key=${this.apiKey}&q=${query}`);
  }

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/current.json?key=${this.apiKey}&q=${city}`);
  }

  getForecast(city: string, days: number = 3): Observable<any> {
    return this.http.get(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=${days}`);
  }
}
