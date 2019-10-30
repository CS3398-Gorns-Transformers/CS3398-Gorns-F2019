import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit, AfterContentInit {

  constructor(public modalController: ModalController) { }
  map;
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef<HTMLDivElement>; 

  ngOnInit(): void{ 
  }
  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,{
    center: {lat: 30.2672, lng: -97.7431},
    zoom: 8

    });
  }
  
  
  dismiss(){

    this.modalController.dismiss();
  }

}
