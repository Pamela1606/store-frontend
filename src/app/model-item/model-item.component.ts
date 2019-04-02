import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ModelItem} from '@app/shared/model/model-item';
import {ModelItemService} from '@app/shared/service/model-item.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';


@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.scss']
})
export class ModelItemComponent implements OnInit, AfterViewInit {

  data: any [];
  modelItems: ModelItem[];
  constructor(private  modelItemService: ModelItemService, public ngxSmartModalService: NgxSmartModalService) {
    this. modelItems = [];
    this.data = [];
  }
  ngOnInit() {
    this.loadData();
  }
  onCreateModelItem() {
    console.log('asdasdasdasadssMod');
  }
  loadData() {
    this.modelItemService.getModelItems().subscribe(value => {
      this. modelItems = value;
      this.data = value;
    });
  }
  onEditModelItem(item: any) {}

  ngAfterViewInit() {
    const pen: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(pen, 'popupModelItem');

    const book: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(book, 'popupModelItem2');
  }
  onDeleteModelItem(id: number) {
    if (undefined !== id  && null !== id) {
      swal({
        title: 'Esta seguro de eliminar Modelo?',
        text: 'esta accion no puede ser revertida despues!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5C6BC0',
        // cancelButtonColor: '#dd3333',
        cancelButtonColor: '#f39c12',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
          this.modelItemService.deleteModelItem(id).subscribe(response => {
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
