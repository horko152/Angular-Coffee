import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CategoryService} from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: Category;
  coffees;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    
    this.getCategory();    
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => {
        this.category = category,
        this.coffees = category.coffee;
      });
  }



}
