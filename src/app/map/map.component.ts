//import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Component,OnInit} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations:[
    trigger('contenedorAnimable',[
      state('initial', style({
        opacity:0
      })),
      state('final', style({
        opacity:1
      })),
      transition('initial => final',animate(2000)),
      transition('final => initial',animate(1000))
    ])
  ]
})
export class MapComponent implements OnInit {

  lat = 21.8764;
  lng = -102.3036;
  zoom = 7;

  mapClicked($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
   
  }

  labelOptions = {
    color: '#ee4646',
    fontFamily: '',
    fontSize: '10px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    text: 'Weather-map'
  }

  iconMap = {
    iconUrl:"https://1.bp.blogspot.com/-PxgBgllxJrE/VpgleojkmyI/AAAAAAAAEAs/NOibbG2gPUc/s1600/google-marker-preview1-177x300.png",
    iconHeigh:10
  }

  constructor() { }

  ngOnInit() {
  }

}
