import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CapacityService} from '@app/shared/service/capacity.service';
import {Capacity} from '@app/shared/model/capacity';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';



@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss']
})
export class CapacityComponent implements OnInit, AfterViewInit {

  data: any [];
  capacities: Capacity[];
  constructor(private capacityService: CapacityService, public ngxSmartModalService: NgxSmartModalService) {
    this.capacities = [];
    this.data = [];
  }
  ngOnInit() {
    this.loadData();
  }
  onCreateCapacity() {
    console.log('asdasdasdasadssMod');
  }
  loadData() {
    this.capacityService.getCapacities().subscribe(value => {
      this.capacities = value;
      this.data = value;
    });
  }
  onEditCapacity(item: any) {}

  ngAfterViewInit() {
    const pen: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(pen, 'popupCapacity');

    const book: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(book, 'popupCapacity2');
  }
  onDeleteCapacity(id: number) {
    if (undefined !== id  && null !== id) {
      swal({
        title: 'Esta seguro de eliminar la Capacidad?',
        text: 'esta accion no puede ser revertida despues!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5C6BC0',
        // cancelButtonColor: '#dd3333',
        cancelButtonColor: '#f39c12',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
          this.capacityService.deleteCapacity(id).subscribe(response => {
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
