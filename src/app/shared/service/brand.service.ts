import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '@app/shared/model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private URL: string = 'brands/';
  constructor(
    private httpClient: HttpClient) {
  }

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.URL);
  }

  getBrandById(id: number): Observable<Brand> {
    return this.httpClient.get<Brand>(`${this.URL}${id}`);
  }

  createBrand(brand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>(this.URL, brand);
  }

  updateBrand(brand: Brand, id: number): Observable<Brand> {
    return this.httpClient.put<Brand>(`${this.URL}${id}`, brand);
  }

  deleteBrand(id: number): Observable<Brand> {
    return this.httpClient.delete<Brand>(`${this.URL}${id}`);
  }
}

