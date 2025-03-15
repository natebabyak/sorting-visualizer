import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfBarsSliderComponent } from './number-of-bars-slider.component';

describe('NumberOfBarsSliderComponent', () => {
  let component: NumberOfBarsSliderComponent;
  let fixture: ComponentFixture<NumberOfBarsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOfBarsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOfBarsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
