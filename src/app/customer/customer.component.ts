import { Component, OnInit } from '@angular/core';
import {CustomerService} from '@app/shared/service/customer.service';
import {Customer} from '@app/shared/model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '@app/customer/modal/modal.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  model: FormGroup;
  customers: Customer[];

  constructor(private customerService: CustomerService, private modalService: NgbModal) {
    this.customers = [];
  }

  ngOnInit() {
    this.model = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      nit: new FormControl(''),
      phoneNumber: new FormControl(''),
    });
    this.customerService.getCustomers().subscribe(value => {
      this.customers = value;
    });
  }
  onSubmit() {
    console.log( this.model.value);

  }
  open() {
    this.modalService.open(ModalComponent);
  }
}
