import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {ItemImageComponent} from '@app/item-image/item-image.component';
import {ItemImageRoutingModule} from '@app/item-image/item-image-routing.module';
import { ModalComponent } from './modal/modal.component';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {UploadFileService} from '@app/shared/service/upload-file.service';
import {SlideshowModule} from 'ng-simple-slideshow';


@NgModule({
  declarations: [
    ItemImageComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ItemImageRoutingModule,
    NgxSmartModalModule.forRoot(),
    SlideshowModule
  ],
  providers: [NgxSmartModalService, UploadFileService],
})
export class ItemImageModule { }
