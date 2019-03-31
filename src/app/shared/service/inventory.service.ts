import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inventory} from '@app/shared/model/inventory';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private URL: string = 'inventories/';
  constructor(
    private httpClient: HttpClient) {
  }

  getInventories(): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(this.URL);
  }

  getInventoryById(id: number): Observable<Inventory> {
    return this.httpClient.get<Inventory>(`${this.URL}${id}`);
  }

  createInventory(inventory: Inventory): Observable<Inventory> {
    return this.httpClient.post<Inventory>(this.URL, inventory);
  }

  updateInventory(inventory: Inventory, id: number): Observable<Inventory> {
    return this.httpClient.put<Inventory>(`${this.URL}${id}`, inventory);
  }

  deleteInventory(id: number): Observable<Inventory> {
    return this.httpClient.delete<Inventory>(`${this.URL}${id}`);
  }
}
