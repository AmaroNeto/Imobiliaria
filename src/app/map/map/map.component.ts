import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MapService } from '../services';

import { Ponto } from '../models';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class MapComponent implements OnInit {

  pontos: Ponto[];
  min = 0;
  max = 600;
  value = 150;
  step = 1;

  constructor(private mapService: MapService) { }

  onInputChange(event: any) {
    this.value = event.value;
  }

  ngOnInit() {
    let mapProp = {
           center: new google.maps.LatLng(-23.6542, -46.6592),
           zoom: 13,
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           styles: [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
  ]};
       let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

       var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-23.6542, -46.6592),
    map: map,
    title: 'Hello World!'
  });

  marker.setMap(map);
  }

  listarTodosPorTamanho(){
     this.mapService.listarTodos().subscribe(
       response => {this.pontos = response}
     );
  }

}
