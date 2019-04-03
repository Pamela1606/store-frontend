import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {ItemImage} from '@app/shared/model/item-image';
import {UploadFileService} from '@app/shared/service/upload-file.service';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  itemImages: ItemImage[];
  constructor( private uploadService: UploadFileService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }
  uploadImage(id: any) {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload, id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.ngxSmartModalService.getModal('upload').close();
      }
    });
    this.selectedFiles = undefined;
  }
  selectFile(event: any) {
    const file = event.target.files.item(0);
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

}
