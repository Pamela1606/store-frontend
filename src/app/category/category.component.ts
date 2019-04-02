import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CategoryService} from '@app/shared/service/category.service';
import {Category} from '@app/shared/model/category';
import { DialogService} from 'ng2-bootstrap-modal';
import {ModalCrearCategoryComponent} from '@app/category/modal-create-category/modal-crear-category.component';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit {
  data: any [];
  categories: Category[];
  constructor(private categoryService: CategoryService, public ngxSmartModalService: NgxSmartModalService) {
    this.categories = [];
    this.data = [];
  }
  ngOnInit() {
   this.loadData();
  }
  onCreateCategory() {
    console.log('asdasdasdasadssMod');
  }
  loadData() {
    this.categoryService.getCategories().subscribe(value => {
      this.categories = value;
      this.data = value;
    });
  }
  onEditCategory(item: any){}

  ngAfterViewInit() {
    const pen: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(pen, 'popupOne');

    const book: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(book, 'popupOne2');
  }
  onDeleteCategory(id: number) {
    if (undefined !== id  && null !== id) {
      swal({
        title: 'Esta seguro de eliminar la Categoría?',
        text: 'esta accion no puede ser revertida despues!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5C6BC0',
        // cancelButtonColor: '#dd3333',
        cancelButtonColor: '#f39c12',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
          this.categoryService.deleteCategory(id).subscribe(response => {
            this.loadData();

            swal(
              'Eliminado!',
              'El depto ha sido eliminado.',
              'success',
            );
          });
        }
      });
    }
  }

}

