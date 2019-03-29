import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CapacityRoutingModule } from './capacity-routing.module';
import { CapacityComponent } from './capacity.component';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CapacityRoutingModule
  ],
  declarations: [
    CapacityComponent
  ],
  providers: [
  ]
})
export class CapacityModule { }
