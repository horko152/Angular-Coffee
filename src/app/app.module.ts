import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CategoryComponent } from './category/category.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CreatecoffeeComponent } from './createcoffee/createcoffee.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CategoryComponent,
    CoffeeComponent,
    CreatecoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
