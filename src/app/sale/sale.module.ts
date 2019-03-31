import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {SaleRoutingModule} from '@app/sale/sale-routing.module';

@NgModule({
  declarations: [SaleComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
