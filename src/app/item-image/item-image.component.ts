import { Component, OnInit } from '@angular/core';
import {ItemImageService} from '@app/shared/service/item-image.service';
import {ItemImage} from '@app/shared/model/item-image';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFileService} from '@app/shared/service/upload-file.service';
import {Item} from '@app/shared/model/item';
import {ItemService} from '@app/shared/service/item.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {IImage} from 'ng-simple-slideshow';

export interface ImgGallery {
  url?: number;
  backgroundSize?: string;
  backgroundPosition?: string;
}
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
  data: any [];
  items: Item[];

  constructor(private itemImageService: ItemImageService, private itemService: ItemService,
              private uploadService: UploadFileService, public ngxSmartModalService: NgxSmartModalService) {
    this.itemImages = [];
    this.items = [];
    this.data = [];
  }

  ngOnInit() {
    this.itemImageService.getItemImages().subscribe(value => {
      this.itemImages = value;
    });
    this.loadData();
  }
  loadData() {
    this.itemService.getItems().subscribe(value => {
      console.log(this.items)
      this.items = value;
      this.data = value;
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
  goToGalery(item: any) {
    console.log('uite,,a,dasd',item);
    const props: Object = {
      imgs: this.getGaleryImage(item),

    };
    this.ngxSmartModalService.setModalData(props, 'galery');
    this.ngxSmartModalService.getModal('galery').open();
  }

  getGaleryImage(images:any[]){
    const imgs: ImgGallery [] = [];
  let  imageUrls: (string | IImage)[] = [
      { url: 'assets/imgs/slider/1.jpeg', caption: 'The first slide', href: '#config' },
      { url: 'assets/imgs/slider/2.jpeg', clickAction: () => alert('custom click function') },
      { url: 'assets/imgs/slider/3.jpeg', backgroundSize: 'contain', backgroundPosition: 'center' },
      { url: 'assets/imgs/slider/4.jpeg', backgroundSize: 'contain', backgroundPosition: 'center' }
    ];
    for (let i = 0; i < images.length; i++) {
      const img: ImgGallery = {
        url: images[i]['url'],
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      }
      imgs.push(img);
    }
    console.log(imgs);
    return imgs;
  }
}
