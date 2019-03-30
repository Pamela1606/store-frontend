import { Component, OnInit } from '@angular/core';
import {ModelItem} from '@app/shared/model/model-item';
import {ModelItemService} from '@app/shared/service/model-item.service';

@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.scss']
})
export class ModelItemComponent implements OnInit {

  modelItems: ModelItem[];
  constructor(private modelItemService: ModelItemService) {
    this.modelItems = [];
  }

  ngOnInit() {
    this.modelItemService.getModelItems().subscribe(value => {
      this.modelItems = value;
    });
  }

}
