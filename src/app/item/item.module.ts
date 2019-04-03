import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {ItemComponent} from '@app/item/item.component';
import {ItemRoutingModule} from '@app/item/item-routing.module';
import { ModalCreateItemComponent } from './modal-create-item/modal-create-item.component';
import {DataTableModule} from 'angular2-datatable';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {UploadFileService} from '@app/shared/service/upload-file.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalImageComponent } from './modal-image/modal-image.component';

@NgModule({
  declarations: [
    ItemComponent,
    ModalCreateItemComponent,
    ModalImageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ItemRoutingModule,
    DataTableModule,
    NgxSmartModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NgxSmartModalService, UploadFileService],
})
export class ItemModule { }
