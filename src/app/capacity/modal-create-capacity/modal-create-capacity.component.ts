import { Component, OnInit } from '@angular/core';
import {CapacityService} from '@app/shared/service/capacity.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';
import {Capacity} from '@app/shared/model/capacity';

export interface CapacityModel {
  id?: number;
  name?: string;
  action?: string;
}

@Component({
  selector: 'app-modal-create-capacity',
  templateUrl: './modal-create-capacity.component.html',
  styleUrls: ['./modal-create-capacity.component.scss']
})
export class ModalCreateCapacityComponent implements OnInit {

  action = 'new'
  capacity: Capacity;
  constructor(private capacityService: CapacityService, public ngxSmartModalService: NgxSmartModalService ) {
    this.capacity = new Capacity();
  }
  ngOnInit() {
  }
  onCreate(name: string) {
    this.capacity.name = name;
    this.capacityService.createCapacity(this.capacity).subscribe(response => {
      console.log(response);
      this.resultr()
      this.ngxSmartModalService.closeLatestModal();
    });
    console.log(name);
  }
  resultr() {
    swal({
      title: 'Creando Capacity',
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
