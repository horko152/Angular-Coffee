import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { timeWork } from '../timework';
import { TimeworkService } from '../timework.service';
@Component({
  selector: 'app-addtimework',
  templateUrl: './addtimework.component.html',
  styleUrls: ['./addtimework.component.scss']
})
export class AddtimeworkComponent implements OnInit {

  timeWork: timeWork;
  model = new timeWork();

  constructor(
    private route: ActivatedRoute,
    private timeWorkService: TimeworkService
  ) { }

  ngOnInit() {
  }

  save() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.model);
    this.timeWorkService.addTime(this.model, id)
    .subscribe(timeWork => {
      console.log(timeWork)
    });
  }

}
