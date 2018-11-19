import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-createcoffee',
  templateUrl: './createcoffee.component.html',
  styleUrls: ['./createcoffee.component.scss']
})
export class CreatecoffeeComponent implements OnInit {

  coffee: Coffee;
  model = new Coffee();

  constructor(
    private route: ActivatedRoute,
    private coffeeService: CoffeeService
  ) { }

  ngOnInit() {

  }


  save() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.model);
    this.coffeeService.addCoffee(this.model, id)
    .subscribe(coffee => {
      console.log(coffee)
    });
  }

}
