import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimeworkComponent } from './addtimework.component';

describe('AddtimeworkComponent', () => {
  let component: AddtimeworkComponent;
  let fixture: ComponentFixture<AddtimeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtimeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtimeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
