import { Component, OnInit } from '@angular/core';


import { TypecoffeeService } from '../typecoffee.service';
import { TypeCoffee } from '../typecoffee';

@Component({
  selector: 'app-create-type-coffee',
  templateUrl: './create-type-coffee.component.html',
  styleUrls: ['./create-type-coffee.component.scss']
})
export class CreateTypeCoffeeComponent implements OnInit {

  model = new TypeCoffee();
  constructor(
    private typeCoffeeService: TypecoffeeService
  ) { }

  ngOnInit() {
  }

  save() {
    this.typeCoffeeService.addType(this.model)
    .subscribe(type => {
      console.log(type)
    });
  }

}
