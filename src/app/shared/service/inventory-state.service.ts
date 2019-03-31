import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InventoryState} from '@app/shared/model/inventory-state';


@Injectable({
  providedIn: 'root'
})
export class InventoryStateService {
  private URL: string = 'inventoryStates/';
  constructor(
  private httpClient: HttpClient) {
  }

  getInventoryStates(): Observable<InventoryState[]> {
    return this.httpClient.get<InventoryState[]>(this.URL);
  }

  getInventoryStateById(id: number): Observable<InventoryState> {
    return this.httpClient.get<InventoryState>(`${this.URL}${id}`);
  }

  createInventoryState(inventoryState: InventoryState): Observable<InventoryState> {
    return this.httpClient.post<InventoryState>(this.URL, inventoryState);
  }

  updateInventoryState(inventoryState: InventoryState, id: number): Observable<InventoryState> {
    return this.httpClient.put<InventoryState>(`${this.URL}${id}`, inventoryState);
  }

  deleteInventoryState(id: number): Observable<InventoryState> {
    return this.httpClient.delete<InventoryState>(`${this.URL}${id}`);
  }
}
