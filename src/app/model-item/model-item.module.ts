import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelItemComponent } from './model-item.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {ModelItemRoutingModule} from '@app/model-item/model-item-routing.module';

@NgModule({
  declarations: [ModelItemComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ModelItemRoutingModule
  ]
})
export class ModelItemModule { }
