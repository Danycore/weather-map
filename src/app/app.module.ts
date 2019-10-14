import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';





@NgModule({
  
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    
    
    ],
  imports: [
    BrowserModule,
    FormsModule,
   // HttpModule,
   ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ 
      apiKey: 'YOUR_API_KEY'//<--- Please use your own key here !!
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
