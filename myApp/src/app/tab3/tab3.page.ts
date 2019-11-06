import { Component } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
/*
Setting up package recieving from API JSON format
*/
export class Tab3Page {
  place:string="";
  type:string="";
  icon:string="";
  temperature:string="";
  humidity: string="";
  SuggestedOutfit : string="";
  constructor(public httpClient:HttpClient, public geolocation:Geolocation,
    public platform : Platform)
   {
    this.platform.ready().then(()=>{
      this.GetCurrentLocation();
    })

   }
  /*
Geolocation to return to OpenWeather Api and have corilation long/lat
*/
   GetCurrentLocation()
  {
  this.geolocation.getCurrentPosition().then((position)=>{
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  this.GetCurrentTemperature(latitude, longitude);
  this.SuggestedOutfitForHike(latitude, longitude);
})
  }
  GetCurrentTemperature(latitude, longitude)  //API calls
  {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=6fb4b94a9daebbd864d11310ef52c584";
    this.httpClient.get(url).subscribe((temperaturedate)=>{
        var obj = <any>temperaturedate;
        this.place = obj.name;
        this.type = obj.weather[0].main;
        this.icon = "https://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
        this.temperature = ((((parseFloat(obj.main.temp)-273.15)*9/5)+32).toFixed(2)).toString()+"°F";
        this.humidity = obj.main.humidity + '%';
    })
  }
  SuggestedOutfitForHike(latitude, longitude) //Functionality to recommend outfit
  {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=6fb4b94a9daebbd864d11310ef52c584";
    this.httpClient.get(url).subscribe((temperaturedate)=>{
      var obj = <any>temperaturedate;
      var y = 0;
      this.temperature = ((((parseFloat(obj.main.temp)-273.15)*9/5)+32).toFixed(2));
      //console.log(this.temperature); debugging [AB]
      y =+ this.temperature;
      //console.log(y); debugging [AB]
      if(y >= 80) this.SuggestedOutfit = "Short Sleeve Cloths and plenty of water!";
      if(y <= 80 && y > 60) this.SuggestedOutfit = "A light sweater may be nice!";
      if(y <= 60 && y > 40) this.SuggestedOutfit = "A medium jacket and pants are recommended!";
      if(y <= 40 && y > 20) this.SuggestedOutfit = "Bundle up its cold out there!";
      
    })

  }

  GenerateSuggestedOutfitPictures(latitude, longitude){
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=6fb4b94a9daebbd864d11310ef52c584";
    this.httpClient.get(url).subscribe((temperaturedate)=>{
      
    })


  }
}
