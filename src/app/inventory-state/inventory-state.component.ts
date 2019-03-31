import { Component, OnInit } from '@angular/core';
import {InventoryStateService} from '@app/shared/service/inventory-state.service';
import {InventoryState} from '@app/shared/model/inventory-state';

@Component({
  selector: 'app-inventory-state',
  templateUrl: './inventory-state.component.html',
  styleUrls: ['./inventory-state.component.scss']
})
export class InventoryStateComponent implements OnInit {
  inventoryStates: InventoryState[];
  constructor(private inventoryStateService: InventoryStateService) {
    this.inventoryStates = [];
  }

  ngOnInit() {
    this.inventoryStateService.getInventoryStates().subscribe(value => {
      this.inventoryStates = value;
    });
  }

}
