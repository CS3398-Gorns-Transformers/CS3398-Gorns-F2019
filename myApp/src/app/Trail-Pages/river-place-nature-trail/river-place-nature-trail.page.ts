import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-river-place-nature-trail',
  templateUrl: './river-place-nature-trail.page.html',
  styleUrls: ['./river-place-nature-trail.page.scss'],
})
export class RiverPlaceNatureTrailPage implements OnInit {
  public Value : string = "Currently Not on Favorites";
  constructor() { }

  ngOnInit() {
  }
  alert(){
    this.Value = "Your Trail has been Added to your Favorites!";
  }
}
