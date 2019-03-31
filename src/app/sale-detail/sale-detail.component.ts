import { Component, OnInit } from '@angular/core';
import {SaleDetail} from '@app/shared/model/sale-detail';
import {SaleDetailService} from '@app/shared/service/sale-detail.service';


@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss']
})
export class SaleDetailComponent implements OnInit {

  saleDetails: SaleDetail[];

  constructor(private saleDetailService: SaleDetailService) {
    this.saleDetails = [];
  }

  ngOnInit() {
    this.saleDetailService.getSaleDetails().subscribe(value => {
      this.saleDetails = value;
    });
  }
}
