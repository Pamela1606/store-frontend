import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemImage} from '@app/shared/model/item-image';


@Injectable({
  providedIn: 'root'
})
export class ItemImageService {

  private URL: string = 'itemImages/';
  constructor(
    private httpClient: HttpClient) {
  }
  getItemImages(): Observable<ItemImage[]> {
    return this.httpClient.get<ItemImage[]>(this.URL);
  }

  getItemImageById(id: number): Observable<ItemImage> {
    return this.httpClient.get<ItemImage>(`${this.URL}${id}`);
  }

  createItemImage(itemImage: ItemImage): Observable<ItemImage> {
    return this.httpClient.post<ItemImage>(this.URL, itemImage);
  }

  updateItemImage(itemImage: ItemImage, id: number): Observable<ItemImage> {
    return this.httpClient.put<ItemImage>(`${this.URL}${id}`, itemImage);
  }

  deleteItemImage(id: number): Observable<ItemImage> {
    return this.httpClient.delete<ItemImage>(`${this.URL}${id}`);
  }
}
