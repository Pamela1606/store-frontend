import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SaleDetail} from '@app/shared/model/sale-detail';


@Injectable({
  providedIn: 'root'
})
export class SaleDetailService {

  private URL:  string = 'saleDetails/';
  constructor(
    private httpClient: HttpClient) {
  }

  getSaleDetails(): Observable<SaleDetail[]> {
    return this.httpClient.get<SaleDetail[]>(this.URL);
  }

  getSaleDetailById(id: number): Observable<SaleDetail> {
    return this.httpClient.get<SaleDetail>(`${this.URL}${id}`);
  }

  createSaleDetail(saleDetail: SaleDetail): Observable<SaleDetail> {
    return this.httpClient.post<SaleDetail>(this.URL, saleDetail);
  }

  updateSaleDetail(saleDetail: SaleDetail, id: number): Observable<SaleDetail> {
    return this.httpClient.put<SaleDetail>(`${this.URL}${id}`, saleDetail);
  }

  deleteSaleDetail(id: number): Observable<SaleDetail> {
    return this.httpClient.delete<SaleDetail>(`${this.URL}${id}`);
  }
}
