import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
@Component({
  selector: 'app-updatecoffee',
  templateUrl: './updatecoffee.component.html',
  styleUrls: ['./updatecoffee.component.scss']
})
export class UpdatecoffeeComponent implements OnInit {

  // coffee: Coffee;
  coffee ;
  // model = new Coffee();

  constructor(
    private route: ActivatedRoute,
    private coffeeService: CoffeeService
  ) { }

  ngOnInit() {
    this.getCoffee();

  }

  getCoffee() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coffeeService.getCoffee(id)
      .subscribe(coffee => {
        this.coffee = coffee;
        console.log(coffee)
      });
  }

  update() {
    this.coffeeService.updateCoffee(this.coffee)
    .subscribe(coffee => {
      console.log(coffee)
    });
  }

}
