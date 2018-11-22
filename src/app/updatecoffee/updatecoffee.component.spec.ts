import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoffeeComponent } from './updatecoffee.component';

describe('UpdatecoffeeComponent', () => {
  let component: UpdatecoffeeComponent;
  let fixture: ComponentFixture<UpdatecoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
