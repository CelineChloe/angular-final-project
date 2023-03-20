import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCalendarComponent } from './reusable-calendar.component';

describe('ReusableCalendarComponent', () => {
  let component: ReusableCalendarComponent;
  let fixture: ComponentFixture<ReusableCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
