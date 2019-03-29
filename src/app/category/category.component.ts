import { Component, OnInit } from '@angular/core';
import {CategoryService} from '@app/shared/service/category.service';
import {Category} from '@app/shared/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService) {
    this.categories = [];
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(value => {
      this.categories = value;
    });
  }

}
