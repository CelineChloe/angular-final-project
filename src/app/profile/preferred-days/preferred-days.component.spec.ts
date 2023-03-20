import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredDaysComponent } from './preferred-days.component';

describe('PreferredDaysComponent', () => {
  let component: PreferredDaysComponent;
  let fixture: ComponentFixture<PreferredDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferredDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferredDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
