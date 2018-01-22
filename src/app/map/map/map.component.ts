import { Component, OnInit, ViewEncapsulation,ChangeDetectorRef,ChangeDetectionStrategy ,NgZone} from '@angular/core';
import { MapService } from '../services';

import { Ponto } from '../models';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MapComponent implements OnInit {

  pontos: Ponto[];
  min = 100;
  max = 10000;
  value = 3000;
  step = 1;

  map;
  markers = [];

  pontoDetail: Ponto;
  showDetail : boolean  = false;

  constructor(private mapService: MapService,private ref: ChangeDetectorRef,private zone: NgZone) { }

  onInputChange(event: any) {
    this.value = event.value;
    this.listarTodosMenorQue(this.value);
  }

  ngOnInit() {
    this.pontoDetail = new Ponto();
    this.ref.detectChanges();
    this.listarTodosMenorQue(this.value);

    let mapProp = {
           center: new google.maps.LatLng( -23.533773, -46.625290),
           zoom: 12,
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
       this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }

  listarTodosMenorQue(preco: number){
     this.mapService.listarTodosMenorQue(preco).subscribe(
       response => {
         console.log(JSON.stringify(response)),
         this.pontos = response,
         this.addMarker(this.pontos);
         this.ref.markForCheck();
       }
     );
  }

  addMarker(pontos : Ponto[]){

    var toggler = () => {
        // toggle the flag here
        this.showDetail = true;
    }

      this.clear();

      pontos.forEach(item => {

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(item.latitude, item.longitude),
          map: this.map,
          title: 'preco total: '+item.precoTotal
        });

        this.markers.push(marker);
        marker.setMap(this.map);

        marker.addListener('click', (e) => {
          this.zone.run(() =>{
            this.showDetail = true;
              this.pontoDetail = item;
              this.ref.markForCheck();

          });

        });

      });

  }

  reloadDetail(ponto: any){
    this.showDetail = true;
    this.pontoDetail = ponto;
    console.log("Reload..");
  }

    clear() {
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }

        this.markers = [];
    }


}
