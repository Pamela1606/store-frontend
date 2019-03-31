import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleDetailComponent } from './sale-detail.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {SaleDetailRoutingModule} from '@app/sale-detail/sale-detail-routing.module';



@NgModule({
  declarations: [SaleDetailComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SaleDetailRoutingModule
  ]
})
export class SaleDetailModule { }
