import { Component, OnInit } from '@angular/core';
import {ModelItemService} from '@app/shared/service/model-item.service';
import {ModelItem} from '@app/shared/model/model-item';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';
import {Category} from '@app/shared/model/category';
import {CategoryService} from '@app/shared/service/category.service';

export interface ModelItemModel {
  id?: number;
  name?: string;
  action?: string;
}

@Component({
  selector: 'app-modal-create-model-item',
  templateUrl: './modal-create-model-item.component.html',
  styleUrls: ['./modal-create-model-item.component.scss']
})
export class ModalCreateModelItemComponent implements OnInit {

  action = 'new'
  modelItem: ModelItem;
  constructor(private modelItemService: ModelItemService, public ngxSmartModalService: NgxSmartModalService ) {
    this.modelItem = new ModelItem();
  }
  ngOnInit() {
  }
  onCreate(name: string) {
    this.modelItem.name = name;
    this.modelItemService.createModelItem(this.modelItem).subscribe(response => {
      console.log(response);
      this.resultr()
      this.ngxSmartModalService.closeLatestModal();
    });
    console.log(name);
  }
  resultr() {
    swal({
      title: 'Creando Modelo',
      text: 'Se ha adicionado un Dpto con exito',
      timer: 600,
      onOpen: () => {
        swal.showLoading();
      }
    }).then((result) => {
      if (
        result.dismiss === swal.DismissReason.timer
      ) {
      }
    });
  }
}
