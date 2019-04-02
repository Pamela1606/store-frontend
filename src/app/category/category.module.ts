import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import {DataTableModule} from 'angular2-datatable';
import { ModalCrearCategoryComponent } from './modal-create-category/modal-crear-category.component';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CategoryRoutingModule,
    DataTableModule,
    NgxSmartModalModule.forRoot(),
  ],
  declarations: [
    CategoryComponent,
    ModalCrearCategoryComponent
  ],
  providers: [NgxSmartModalService],
})
export class CategoryModule { }
