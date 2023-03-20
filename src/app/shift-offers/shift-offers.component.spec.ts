import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftOffersComponent } from './shift-offers.component';

describe('ShiftOffersComponent', () => {
  let component: ShiftOffersComponent;
  let fixture: ComponentFixture<ShiftOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
