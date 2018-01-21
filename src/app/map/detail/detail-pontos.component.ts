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
    let id = this.route.snapshot.params['id'];
    //this.ponto = this.mapService.buscarPorId(id);
    this.ponto = new Ponto(1,'rua marques de pombal, boa vista, roraima',
            '-55555', '-222222', 2500, 200000, 120, 'Viva Real');
  }

}
