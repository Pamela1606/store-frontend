import { Component, OnInit } from '@angular/core';
import {CustomerService} from '@app/shared/service/customer.service';
import {Customer} from '@app/shared/model/customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) {
    this.customers = [];
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(value => {
      this.customers = value;
    });
  }
}
