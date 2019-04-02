import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { BrandModule } from './brand/brand.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CapacityModule} from '@app/capacity/capacity.module';
import {CategoryModule} from '@app/category/category.module';
import {ModelItemModule} from '@app/model-item/model-item.module';
import {ItemModule} from '@app/item/item.module';
import {InventoryModule} from '@app/inventory/inventory.module';
import {InventoryStateModule} from '@app/inventory-state/inventory-state.module';
import {ItemImageModule} from '@app/item-image/item-image.module';
import {SaleDetailModule} from '@app/sale-detail/sale-detail.module';
import {SaleModule} from '@app/sale/sale.module';
import {CustomerModule} from '@app/customer/customer.module';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {ModalCrearCategoryComponent} from '@app/category/modal-create-category/modal-crear-category.component';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BootstrapModalModule.forRoot({container:document.body}),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    BrandModule,
    CapacityModule,
    CategoryModule,
    ModelItemModule,
    ItemModule,
    InventoryModule,
    InventoryStateModule,
    ItemImageModule,
    SaleDetailModule,
    SaleModule,
    CustomerModule,
    AboutModule,
    ReactiveFormsModule,



    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent,

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
