import { Component, OnInit } from '@angular/core';
import {Tab2Page} from "../../tab2/tab2.page";


@Component({
  selector: 'app-barton-creek',
  templateUrl: './barton-creek.page.html',
  styleUrls: ['./barton-creek.page.scss'],
})

export class BartonCreekPage implements OnInit {
  public Value : string = "Currently Not on Favorites";
  public sheet : HTMLStyleElement = document.createElement('style');
  counter : number = 1;
  
  
  constructor() { 
    this.sheet.innerHTML = "ion-card {position: relative;\
      text-align: center;\
      visibility: hidden ;}";
      
  }

  ngOnInit() {
  }
  alert(){
    this.Value = "Your Trail has been Added to your Favorites!";
  }
}
