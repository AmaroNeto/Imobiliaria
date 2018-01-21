import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPontosComponent } from './listar';
import { MapComponent } from './map';

import { RouterModule } from '@angular/router';
import { MapService } from './services';

import { MatButtonModule, MatIconModule, MatCardModule,
  MatTableModule, MatPaginatorModule, MatDialogModule, MatSliderModule} from '@angular/material';
import { DetailPontosComponent } from './detail';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatSliderModule
  ],
  providers: [MapService],
  declarations: [ListarPontosComponent, MapComponent, DetailPontosComponent],
  entryComponents: [MapComponent]
})
export class MapModule { }
