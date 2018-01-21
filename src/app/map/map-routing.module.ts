import { Routes } from '@angular/router';
import { ListarPontosComponent } from './listar';
import { DetailPontosComponent } from './detail';
import { MapComponent } from './map';

export const MapRoutes: Routes = [
  {
    path: 'listar',
    redirectTo: 'pontos/listar'
  },
  {
    path: 'pontos/listar',
    component: ListarPontosComponent
  },
  {
    path: 'pontos/detalhe/:id',
    component: DetailPontosComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
]
