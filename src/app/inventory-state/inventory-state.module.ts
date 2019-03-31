import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { InventoryStateComponent } from './inventory-state.component';
import {InventoryStateRoutingModule} from './inventory-state-routing.module';


@NgModule({
  declarations: [
    InventoryStateComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    InventoryStateRoutingModule
  ],
  providers: [
  ]
})
export class InventoryStateModule { }
