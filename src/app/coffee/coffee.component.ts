import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoffeeService } from '../coffee.service';

@Component({ 
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  coffee;
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
      .subscribe(coffee => this.coffee = coffee);
  }

}
