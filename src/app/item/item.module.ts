import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {ItemComponent} from '@app/item/item.component';
import {ItemRoutingModule} from '@app/item/item-routing.module';

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ItemRoutingModule
  ],
  providers: [
  ]
})
export class ItemModule { }
