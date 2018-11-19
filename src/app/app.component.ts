import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  categories: Category[];

  constructor( private categoryService: CategoryService) { }


  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories );

  }

  ngOnInit() {
    this.getCategories();
  }


}
