import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

import { ItemComponent } from './item/item.component';

import {ModelItemModule} from '@app/model-item/model-item.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    BrandModule,
    CapacityModule,
    CategoryModule,
    ModelItemModule,
    AboutModule,

    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, ItemComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
