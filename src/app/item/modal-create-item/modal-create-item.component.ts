import { Component, OnInit } from '@angular/core';
import {ItemService} from '@app/shared/service/item.service';
import {Item} from '@app/shared/model/item';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';
import {Brand} from '@app/shared/model/brand';
import {BrandService} from '@app/shared/service/brand.service';
import {CategoryService} from '@app/shared/service/category.service';
import {Category} from '@app/shared/model/category';
import {ModelItem} from '@app/shared/model/model-item';
import {ModelItemService} from '@app/shared/service/model-item.service';


export interface ItemModel {
  id?: number;
  name?: string;
  action?: string;
}

@Component({
  selector: 'app-modal-create-item',
  templateUrl: './modal-create-item.component.html',
  styleUrls: ['./modal-create-item.component.scss']
})
export class ModalCreateItemComponent implements OnInit {

  action = 'new'
  data: any [];
  item: Item;
  brands: Brand[];
  currentBrand = '';
  categories: Category[];
  modelItems: ModelItem[];
  constructor(private itemService: ItemService, private brandService: BrandService, private categoryService: CategoryService, private  modelItemService: ModelItemService, public ngxSmartModalService: NgxSmartModalService ) {
    this.item = new Item();
    this.brands = [];
    this.categories = [];
    this. modelItems = [];
    this.data = [];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
      this.brandService.getBrands().subscribe(value => {
      this.brands = value;
      this.data = value;
    });
    this.categoryService.getCategories().subscribe(value => {
      this.categories = value;
      this.data = value;
    });
    this.modelItemService.getModelItems().subscribe(value => {
      this.modelItems = value;
      this.data = value;
    });
  }
  onCreate(name: string) {
    this.item.name = name;
    this.itemService.createItem(this.item).subscribe(response => {
      console.log(response);
      this.result();
      this.ngxSmartModalService.closeLatestModal();
    });
    console.log(name);
  }
  result() {
    swal({
      title: 'Creando Item',
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
  onChangeCurrentBrand(event: any) {

  }

}
