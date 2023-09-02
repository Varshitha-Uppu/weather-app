import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService : WeatherService){

  }
  
  cityName: string = 'London';
  weatherData?: WeatherData;
  onSubmit(){
    this.getWeatherData(this.cityName);
  }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }
  
  private getWeatherData(cn : string){
    this.weatherService.getWeatherData(cn)
    .subscribe({
      next: (response: any) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}
