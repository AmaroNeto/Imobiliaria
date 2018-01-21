import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { MapService } from '../services';
import { Ponto } from '../models';

import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-pontos',
  templateUrl: './listar-pontos.component.html',
  styleUrls: ['./listar-pontos.component.css']
})
export class ListarPontosComponent implements OnInit {

  pontos: Ponto[];
  displayedColumns = ['imobiliaria', 'endereco', 'tamanho', 'valor', 'detalhe'];
  dataSource : MatTableDataSource<Ponto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private mapService: MapService, public dialog: MatDialog) { }

  ngOnInit() {
    this.pontos = this.listarTodos();
    this.dataSource = new MatTableDataSource<Ponto>(this.pontos);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  listarTodos(): Ponto[]{
    return [new Ponto(1,'rua marques de pombal, boa vista, roraima',
            '-55555', '-222222', 2500, 200000, 120, 'Viva Real')];
    //return this.mapService.listarTodos();
  }
}
