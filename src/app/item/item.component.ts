import { Component, OnInit } from '@angular/core';
import {ItemService} from '@app/shared/service/item.service';
import {Item} from '@app/shared/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Item[];
  constructor(private itemService: ItemService) {
    this.items = [];
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(value => {
      this.items = value;
    });
  }

}
