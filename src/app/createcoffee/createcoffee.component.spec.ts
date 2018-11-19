import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecoffeeComponent } from './createcoffee.component';

describe('CreatecoffeeComponent', () => {
  let component: CreatecoffeeComponent;
  let fixture: ComponentFixture<CreatecoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
