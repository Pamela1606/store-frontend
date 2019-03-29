import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModelItem} from '@app/shared/model/model-item';

@Injectable({
  providedIn: 'root'
})
export class ModelItemService {

  private URL: string = 'modelItems/';
  constructor(
    private httpClient: HttpClient) {
  }

  getModelItems(): Observable<ModelItem[]> {
    return this.httpClient.get<ModelItem[]>(this.URL);
  }

  getModelItemById(id: number): Observable<ModelItem> {
    return this.httpClient.get<ModelItem>(`${this.URL}${id}`);
  }

  createModelItem(modelItem: ModelItem): Observable<ModelItem> {
    return this.httpClient.post<ModelItem>(this.URL, modelItem);
  }

  updateModelItem(modelItem: ModelItem, id: number): Observable<ModelItem> {
    return this.httpClient.put<ModelItem>(`${this.URL}${id}`, modelItem);
  }

  deleteModelItem(id: number): Observable<ModelItem> {
    return this.httpClient.delete<ModelItem>(`${this.URL}${id}`);
  }
}

