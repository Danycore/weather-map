import { Component, OnChanges ,OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit,OnChanges  {
  
  city: string;
  temp: number;

  @Input() latitude: string;
  @Input() longitude: string;
  
   
  
  

  constructor (private http: HttpClient) { }

    
  ngOnInit() {
    
  }

  ngOnChanges(){

    let url = 'http://api.openweathermap.org/data/2.5/weather?'
    + 'lat=' + this.latitude
    + '&lon=' + this.longitude
    + '&units=metric'
    + '&lang=en'
    + '&appid=YOUR_API_KEY'; // <-- your api key here
  
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.city = data.name;
      this.temp = data.main.temp.toFixed(1);
    });
  }
}
