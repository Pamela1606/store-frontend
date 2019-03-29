import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Capacity} from '@app/shared/model/capacity';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {

  private URL: string = 'capacities/';
  constructor(
    private httpClient: HttpClient) {
  }

  getCapacities(): Observable<Capacity[]> {
    return this.httpClient.get<Capacity[]>(this.URL);
  }

  getCapacityById(id: number): Observable<Capacity> {
    return this.httpClient.get<Capacity>(`${this.URL}${id}`);
  }

  createCapacity(capacity: Capacity): Observable<Capacity> {
    return this.httpClient.post<Capacity>(this.URL, capacity);
  }

  updateCapacity(capacity: Capacity, id: number): Observable<Capacity> {
    return this.httpClient.put<Capacity>(`${this.URL}${id}`, capacity);
  }

  deleteCapacity(id: number): Observable<Capacity> {
    return this.httpClient.delete<Capacity>(`${this.URL}${id}`);
  }
}

