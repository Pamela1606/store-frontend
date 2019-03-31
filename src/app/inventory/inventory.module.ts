import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { InventoryComponent } from './inventory.component';
import {InventoryRoutingModule} from './inventory-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    InventoryRoutingModule
  ],
  declarations: [
    InventoryComponent
  ],
  providers: [
  ]
})
export class InventoryModule { }
