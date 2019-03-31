import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {ItemImageComponent} from '@app/item-image/item-image.component';
import {ItemImageRoutingModule} from '@app/item-image/item-image-routing.module';


@NgModule({
  declarations: [
    ItemImageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ItemImageRoutingModule
  ]
})
export class ItemImageModule { }
