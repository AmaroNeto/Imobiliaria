import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapRoutes } from './map';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pontos/listar',
    pathMatch: 'full'
  },
  ...MapRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
