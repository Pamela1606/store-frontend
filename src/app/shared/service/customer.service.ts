import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '@app/shared/model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private URL: string = 'customers/';
  constructor(
    private httpClient: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.URL}${id}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.URL, customer);
  }

  updateCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.URL}${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.URL}${id}`);
  }
}
