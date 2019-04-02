import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  model: FormGroup;
  constructor() { }

  ngOnInit() {
    this.model = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      nit: new FormControl(''),
      phoneNumber: new FormControl(''),
    });
  }
  onSubmit() {
    console.log( this.model.value);

  }

}
