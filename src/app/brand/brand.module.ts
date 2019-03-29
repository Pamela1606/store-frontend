import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    BrandRoutingModule
  ],
  declarations: [
    BrandComponent
  ],
  providers: [
  ]
})
export class BrandModule { }
