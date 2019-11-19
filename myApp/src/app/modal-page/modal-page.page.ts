import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit, AfterContentInit {
  latitude: any;
  longitude: any;
  constructor(public modalController: ModalController, private geolocation: Geolocation) { }
  map;
  @ViewChild('mapElement', { static: true }) mapNativeElement: ElementRef<HTMLDivElement>; 

  ngOnInit(): void{ 
  }
  ngAfterContentInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 16
      });
      /*location object*/
      const pos = {
        lat: this.latitude - 0,
        lng: this.longitude
      };
      map.setCenter(pos);
      const icon = {
        url: 'assets/CurrentLocation.jpg', // image url
        scaledSize: new google.maps.Size(15, 15), // scaled size
      };
      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!',
        icon: icon
      });
      const contentString = 
          '<h1> Current Location </h1>';
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  
  }
  
  
  dismiss(){

    this.modalController.dismiss();
  }

}
