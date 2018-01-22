import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MapService } from '../services';
import { Ponto } from '../models';

@Component({
  selector: 'app-detail-pontos',
  templateUrl: './detail-pontos.component.html',
  styleUrls: ['./detail-pontos.component.css']
})
export class DetailPontosComponent implements OnInit {

  ponto: Ponto;

  constructor(private mapService: MapService, private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.ponto = new Ponto();
    let id = this.route.snapshot.params['id'];
    this.mapService.buscarPorId(id).subscribe(
      response => {
        this.ponto = response
      }
    );
  }

}
