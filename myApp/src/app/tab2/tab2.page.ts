import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, AfterContentInit{
  map;
  
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef<HTMLDivElement>; 
  constructor() {}
  
  ngOnInit(): void{ 
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,{
    center: {lat: 30.2672, lng: -97.7431},
    zoom: 8

    });

  }
}
