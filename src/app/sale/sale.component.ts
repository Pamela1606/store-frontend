import { Component, OnInit } from '@angular/core';
import {Sale} from '@app/shared/model/sale';
import {SaleService} from '@app/shared/service/sale.service';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  sales: Sale[];
  constructor(private saleService: SaleService) {
    this.sales = [];
  }

  ngOnInit() {
    this.saleService.getSales().subscribe(value => {
      this.sales = value;
    });
  }
}
