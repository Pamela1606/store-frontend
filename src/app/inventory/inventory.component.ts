import { Component, OnInit } from '@angular/core';
import {InventoryService} from '@app/shared/service/inventory.service';
import {Inventory} from '@app/shared/model/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  inventories: Inventory[];
  constructor(private inventoryService: InventoryService) {
    this.inventories = [];
  }

  ngOnInit() {
    this.inventoryService.getInventories().subscribe(value => {
      this.inventories = value;
  });
  }

}
