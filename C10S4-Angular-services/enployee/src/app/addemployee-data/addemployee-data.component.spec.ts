import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeeDataComponent } from './addemployee-data.component';

describe('AddemployeeDataComponent', () => {
  let component: AddemployeeDataComponent;
  let fixture: ComponentFixture<AddemployeeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeeDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddemployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
