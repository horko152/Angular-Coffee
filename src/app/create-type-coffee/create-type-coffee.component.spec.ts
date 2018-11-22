import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeCoffeeComponent } from './create-type-coffee.component';

describe('CreateTypeCoffeeComponent', () => {
  let component: CreateTypeCoffeeComponent;
  let fixture: ComponentFixture<CreateTypeCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTypeCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
