import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
import {UploadFileService} from '@app/shared/service/upload-file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';


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
export class ModalCreateItemComponent implements OnInit, OnChanges {

  action = 'new'
  data: any [];
  item: Item;
  brands: Brand[];
  currentBrand = '';
  categories: Category[];
  modelItems: ModelItem[];

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  model: FormGroup;
  constructor(private itemService: ItemService,
              private brandService: BrandService,
              private categoryService: CategoryService,
              private  modelItemService: ModelItemService,
              public ngxSmartModalService: NgxSmartModalService,
              private uploadService: UploadFileService) {
    this.item = new Item();
    this.brands = [];
    this.categories = [];
    this. modelItems = [];
    this.data = [];
  }
  ngOnInit() {
    this.model = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      tax: new FormControl(''),
      brandId: new FormControl(''),
      capacity: new FormControl(''),
      description: new FormControl(''),
      importPrice: new FormControl(''),
      categoryId: new FormControl(''),
      modelItemId: new FormControl('')
    });
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
  onCreate() {
    // this.item.name = name;
    console.log( ' llego ', this.model.value);
    this.itemService.createItem(this.model.value).subscribe(value => {
      this.upload( value);
      this.model.reset();
      this.ngxSmartModalService.closeLatestModal();
    });
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

  selectFile(event: any) {
    const file = event.target.files.item(0)

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload( model: any) {
    if ( this.selectedFiles.length > 0){


    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.currentFileUpload, model.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    }
    this.selectedFiles = undefined;
  }
  onChangeCurrentBrand(event: any) {
    console.log(event)
  }

  onChangeCurrentCategory(event: any) {

  }

  onChangeCurrentModelItem(event: any) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}
