import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitFantasyComponent } from './fruit-fantasy.component';

describe('FruitFantasyComponent', () => {
  let component: FruitFantasyComponent;
  let fixture: ComponentFixture<FruitFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitFantasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
