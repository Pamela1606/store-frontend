import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sale} from '@app/shared/model/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private URL: string = 'sales/';
  constructor(
    private httpClient: HttpClient) {
  }

  getSales(): Observable<Sale[]> {
    return this.httpClient.get<Sale[]>(this.URL);
  }

  getSaleById(id: number): Observable<Sale> {
    return this.httpClient.get<Sale>(`${this.URL}${id}`);
  }

  createSale(sale: Sale): Observable<Sale> {
    return this.httpClient.post<Sale>(this.URL, sale);
  }

  updateSale(sale: Sale, id: number): Observable<Sale> {
    return this.httpClient.put<Sale>(`${this.URL}${id}`, sale);
  }

  deleteSale(id: number): Observable<Sale> {
    return this.httpClient.delete<Sale>(`${this.URL}${id}`);
  }
}
