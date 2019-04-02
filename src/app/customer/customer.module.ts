import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [CustomerComponent, ModalComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerRoutingModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
  ]
})
export class CustomerModule { }
