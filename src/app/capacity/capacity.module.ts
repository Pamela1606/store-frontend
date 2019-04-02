import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CapacityRoutingModule } from './capacity-routing.module';
import { CapacityComponent } from './capacity.component';
import {DataTableModule} from 'angular2-datatable';
import { ModalCreateCapacityComponent } from './modal-create-capacity/modal-create-capacity.component';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CapacityRoutingModule,
    DataTableModule,
    NgxSmartModalModule.forRoot(),
  ],
  declarations: [
    CapacityComponent,
    ModalCreateCapacityComponent
  ],
  providers: [NgxSmartModalService],
})
export class CapacityModule { }
