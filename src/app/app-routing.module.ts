import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CategoryComponent } from './category/category.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CreatecoffeeComponent} from './createcoffee/createcoffee.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'category/:id', component: CategoryComponent},
  { path: 'coffee/:id', component: CoffeeComponent},
  { path: 'createcoffee/:id', component: CreatecoffeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
