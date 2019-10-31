import { Component } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  place:string="";
  type:string="";
  icon:string="";
  temperature:string="";
  constructor(public httpClient:HttpClient, public geolocation:Geolocation,
    public platform : Platform)
   {
    this.platform.ready().then(()=>{
      this.GetCurrentLocation();
    })

   }
  GetCurrentLocation()
  {
  this.geolocation.getCurrentPosition().then((position)=>{
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  this.GetCurrentTemperature(latitude, longitude);
})
  }
  GetCurrentTemperature(latitude, longitude)
  {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=6fb4b94a9daebbd864d11310ef52c584";
    this.httpClient.get(url).subscribe((temperaturedate)=>{
        var obj = <any>temperaturedate;
        this.place = obj.name;
        this.type = obj.weather[0].main;
        this.icon = "https://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
        this.temperature = ((parseFloat(obj.main.temp)-273.15).toFixed(2)).toString()+"°C";
    })
  }
}
