import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {
  Ponto
} from '../models';

@Injectable()
export class MapService {

  private readonly BASE_URL = "https://tranquil-garden-64029.herokuapp.com/";

  constructor(private http: Http) { }

  /**
  * Retorna todos os pontos cadastrados
  *
  *@param Ponto ponto
  *@return Observable<Ponto>
  */
  listarTodos(): Observable<Ponto[]> {
    return this.http
      .get(this.BASE_URL+"api/pontos")
      .map(response => response.json().data as Ponto[])
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
      .get(this.BASE_URL +"api/pontos/id"+ params)
      .map(response => response.json().data[0] as Ponto)
      .catch(error => Observable.throw(error));
  }

  /**
  * Retorna todos os pontos cadastrados com preço de m2 menor que o parametro
  *
  *@param number tamanho
  *@return Observable<Ponto[]>
  */
  listarTodosMenorQue(preco: number): Observable<Ponto[]> {
    let params = `?preco=${preco}`;
    return this.http
      .get(this.BASE_URL+"api/pontos/precoM2")
      .map(response => response.json().data as Ponto[])
      .catch(error => Observable.throw(error));
  }

}
