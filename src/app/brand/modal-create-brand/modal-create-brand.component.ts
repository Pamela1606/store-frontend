import { Component, OnInit } from '@angular/core';
import {BrandService} from '@app/shared/service/brand.service';
import {Brand} from '@app/shared/model/brand';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';


export interface BrandModel {
  id?: number;
  name?: string;
  action?: string;
}

@Component({
  selector: 'app-modal-create-brand',
  templateUrl: './modal-create-brand.component.html',
  styleUrls: ['./modal-create-brand.component.scss']
})
export class ModalCreateBrandComponent implements OnInit {

  action = 'new'
  brand: Brand;
  constructor(private brandService: BrandService, public ngxSmartModalService: NgxSmartModalService ) {
    this.brand = new Brand();
  }
  ngOnInit() {
  }
  onCreate(name: string) {
    this.brand.name = name;
    this.brandService.createBrand(this.brand).subscribe(response => {
      console.log(response);
      this.resultr()
      this.ngxSmartModalService.closeLatestModal();
    });
    console.log(name);
  }
  resultr() {
    swal({
      title: 'Creando Brand',
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
