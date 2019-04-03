import { Component, OnInit } from '@angular/core';
import {ItemImageService} from '@app/shared/service/item-image.service';
import {ItemImage} from '@app/shared/model/item-image';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFileService} from '@app/shared/service/upload-file.service';


@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  itemImages: ItemImage[];

  constructor(private itemImageService: ItemImageService, private uploadService: UploadFileService) {
    this.itemImages = [];
  }

  ngOnInit() {
    this.itemImageService.getItemImages().subscribe(value => {
      this.itemImages = value;
    });
  }
  selectFile(event: any) {
    const file = event.target.files.item(0)

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;
  const  id = '1';
    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.currentFileUpload, id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })

    this.selectedFiles = undefined
  }
}
