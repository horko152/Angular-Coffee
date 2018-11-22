import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CategoryComponent } from './category/category.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CreatecoffeeComponent} from './createcoffee/createcoffee.component';
import { AddtimeworkComponent } from './addtimework/addtimework.component';
import { CreateTypeCoffeeComponent } from './create-type-coffee/create-type-coffee.component';
import { UpdatecoffeeComponent } from './updatecoffee/updatecoffee.component'; 

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'category/:id', component: CategoryComponent},
  { path: 'coffee/:id', component: CoffeeComponent},
  { path: 'createcoffee/:id', component: CreatecoffeeComponent },
  { path: 'addtimework/:id', component: AddtimeworkComponent },
  { path: 'createtype', component: CreateTypeCoffeeComponent },
  { path: 'updatecoffee/:id', component: UpdatecoffeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
