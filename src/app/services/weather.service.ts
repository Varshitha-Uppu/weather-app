import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherApiBaseUrl = 'https://openweather43.p.rapidapi.com/weather';
  private XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  private XRapidAPIHostHeaderValue = 'openweather43.p.rapidapi.com';
  private XRapidAPIKeyHeaderName = 'X-RapidAPI-Key';
  private XRapidAPIKeyHeaderValue = '99f604e230msh2686d197a96fae1p170e5djsnc60ec4049f6f';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    });
  }
}
