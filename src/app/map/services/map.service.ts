import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {
  Ponto
} from '../models';

@Injectable()
export class MapService {

  private readonly BASE_URL = "http://api.fixer.io/latest";

  constructor(private http: Http) { }

  /**
  * Retorna todos os pontos cadastrados
  *
  *@param Ponto ponto
  *@return Observable<Ponto>
  */
  listarTodos(): Observable<Ponto> {
    return this.http
      .get(this.BASE_URL)
      .map(response => response.json() as Ponto)
      .catch(error => Observable.throw(error));
  }

  /**
  * Retorna o Ponto de acordo com o id
  *
  *@param number id
  *@return Observable<Ponto>
  */
  buscarPorId(id: number): Observable<Ponto> {
    let params = `?id=${id}`;

    return this.http
      .get(this.BASE_URL + params)
      .map(response => response.json() as Ponto)
      .catch(error => Observable.throw(error));
  }

}
