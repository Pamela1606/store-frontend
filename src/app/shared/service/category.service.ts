import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '@app/shared/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL: string = 'categories/';
  constructor(
    private httpClient: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.URL);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.URL}${id}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.URL, category);
  }

  updateCategory(category: Category, id: number): Observable<Category> {
    return this.httpClient.put<Category>(`${this.URL}${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`${this.URL}${id}`);
  }
}

