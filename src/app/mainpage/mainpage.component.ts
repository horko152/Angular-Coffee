import { Component, OnInit, Input } from '@angular/core';

import { TypeCoffee } from '../typecoffee'; 
import { TypecoffeeService } from '../typecoffee.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  
  typesCoffee: TypeCoffee[];
  constructor(
    private typeCoffeService: TypecoffeeService
  ) { }

  ngOnInit() {
    this.typeCoffeService.getTypes()
    .subscribe(typesCoffee => this.typesCoffee = typesCoffee );
    console.log(this.typesCoffee)
  }

}
