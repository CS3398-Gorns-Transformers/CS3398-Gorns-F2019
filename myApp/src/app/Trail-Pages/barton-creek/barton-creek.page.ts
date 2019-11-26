import { Component, OnInit } from '@angular/core';
import {Tab2Page} from "../../tab2/tab2.page";


@Component({
  selector: 'app-barton-creek',
  templateUrl: './barton-creek.page.html',
  styleUrls: ['./barton-creek.page.scss'],
})

export class BartonCreekPage implements OnInit {
  public Value : string = "Currently Not on Favorites";
  counter : number = 1;
  
  
  constructor() {}

  ngOnInit() {
  }
  alert(){
    this.Value = "Your Trail has been Added to your Favorites!";
  }
}
