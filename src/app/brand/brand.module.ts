import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import {DataTableModule} from 'angular2-datatable';
import { ModalCreateBrandComponent } from './modal-create-brand/modal-create-brand.component';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    BrandRoutingModule,
    DataTableModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [
    BrandComponent,
    ModalCreateBrandComponent
  ],
  providers: [NgxSmartModalService],
})
export class BrandModule { }
