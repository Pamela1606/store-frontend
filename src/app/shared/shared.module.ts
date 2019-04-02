import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],

})
export class SharedModule { }
