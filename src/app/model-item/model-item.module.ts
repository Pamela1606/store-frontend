import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelItemComponent } from './model-item.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {ModelItemRoutingModule} from '@app/model-item/model-item-routing.module';
import { ModalCreateModelItemComponent } from './modal-create-model-item/modal-create-model-item.component';
import {DataTableModule} from 'angular2-datatable';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';

@NgModule({
  declarations: [ModelItemComponent, ModalCreateModelItemComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ModelItemRoutingModule,
    DataTableModule,
    NgxSmartModalModule.forRoot(),
  ],
  providers: [NgxSmartModalService],
})
export class ModelItemModule { }
