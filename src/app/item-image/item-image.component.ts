import { Component, OnInit } from '@angular/core';
import {ItemImageService} from '@app/shared/service/item-image.service';
import {ItemImage} from '@app/shared/model/item-image';


@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent implements OnInit {

  itemImages: ItemImage[];

  constructor(private itemImageService: ItemImageService) {
    this.itemImages = [];
  }

  ngOnInit() {
    this.itemImageService.getItemImages().subscribe(value => {
      this.itemImages = value;
    });
  }

}
