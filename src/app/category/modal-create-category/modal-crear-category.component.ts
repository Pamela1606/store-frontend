import { Component, OnInit } from '@angular/core';
import {CategoryService} from '@app/shared/service/category.service';
import {Category} from '@app/shared/model/category';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';

export interface CategoriaModel {
  id?: number;
  name?: string;
  action?: string;
}
@Component({
  selector: 'app-modal-crear-category',
  templateUrl: './modal-crear-category.component.html',
  styleUrls: ['./modal-crear-category.component.scss']
})
export class ModalCrearCategoryComponent  implements OnInit {
  action = 'new'
  category: Category;
  constructor(private categoryService: CategoryService, public ngxSmartModalService: NgxSmartModalService ) {
    this.category = new Category();
  }

  ngOnInit() {
  }

  onCreate(name: string) {
    this.category.name = name;
    this.categoryService.createCategory(this.category).subscribe(response => {
      console.log(response);
      this.resultr()
      this.ngxSmartModalService.closeLatestModal();
    });
    console.log(name);
  }
  resultr() {
    swal({
      title: 'Creando Categoría',
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
