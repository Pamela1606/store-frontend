import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BrandService} from '@app/shared/service/brand.service';
import {Brand} from '@app/shared/model/brand';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';
import {Category} from '@app/shared/model/category';
import {CategoryService} from '@app/shared/service/category.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit, AfterViewInit {

  data: any [];
  brands: Brand[];
  constructor(private brandService: BrandService, public ngxSmartModalService: NgxSmartModalService) {
    this.brands = [];
    this.data = [];
  }
  ngOnInit() {
    this.loadData();
  }
  onCreateBrand() {
    console.log('asdasdasdasadssMod');
  }
  loadData() {
    this.brandService.getBrands().subscribe(value => {
      this.brands = value;
      this.data = value;
    });
  }
  onEditBrand(item: any) {}

  ngAfterViewInit() {
    const pen: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(pen, 'popupBrand');

    const book: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(book, 'popupBrand2');
  }
  onDeleteBrand(id: number) {
    if (undefined !== id  && null !== id) {
      swal({
        title: 'Esta seguro de eliminar la Marca?',
        text: 'esta accion no puede ser revertida despues!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5C6BC0',
        // cancelButtonColor: '#dd3333',
        cancelButtonColor: '#f39c12',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
          this.brandService.deleteBrand(id).subscribe(response => {
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
