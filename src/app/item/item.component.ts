import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ItemService} from '@app/shared/service/item.service';
import {Item} from '@app/shared/model/item';
import {NgxSmartModalService} from 'ngx-smart-modal';
import swal from 'sweetalert2';
import {UploadFileService} from '@app/shared/service/upload-file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewInit {

  data: any [];
  items: Item[];
  constructor(private itemService: ItemService,
              public ngxSmartModalService: NgxSmartModalService,
              private uploadService: UploadFileService) {
    this.items = [];
    this.data = [];
  }
  ngOnInit() {
    this.loadData();
  }
  onCreateItem() {
    console.log('asdasdasdasadssMod');
  }
  loadData() {
    this.itemService.getItems().subscribe(value => {
      this.items = value;
      this.data = value;
    });
  }
  onEditItem(item: any) {}
  uploadImage(id: any) {
    const props: Object = {
      id: id,

    };
    this.ngxSmartModalService.setModalData(props, 'upload');
    this.ngxSmartModalService.getModal('upload').open();
  }
  ngAfterViewInit() {
    const pen: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(pen, 'popupItem');


  }
  onDeleteItem(id: number) {
    if (undefined !== id  && null !== id) {
      swal({
        title: 'Esta seguro de eliminar Item?',
        text: 'esta accion no puede ser revertida despues!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5C6BC0',
        // cancelButtonColor: '#dd3333',
        cancelButtonColor: '#f39c12',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
          this.itemService.deleteItem(id).subscribe(response => {
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
