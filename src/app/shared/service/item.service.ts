import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '@app/shared/model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private URL: string = '/items/';
  constructor(
    private httpClient: HttpClient) {
  }
  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.URL);
  }

  getItemById(id: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.URL}${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.URL, item);
  }

  updateItem(item: Item, id: number): Observable<Item> {
    return this.httpClient.put<Item>(`${this.URL}${id}`, item);
  }

  deleteItem(id: number): Observable<Item> {
    return this.httpClient.delete<Item>(`${this.URL}${id}`);
  }
}
