import { Component, OnInit } from '@angular/core';
import {BrandService} from '@app/shared/service/brand.service';
import {Brand} from '@app/shared/model/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brands: Brand[];
  constructor(private brandService: BrandService) {
    this.brands = [];
  }

  ngOnInit() {
    this.brandService.getBrands().subscribe(value => {
      this.brands = value;
    });
  }

}
