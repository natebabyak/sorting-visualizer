import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfBarsInputComponent } from './number-of-bars-input.component';

describe('NumberOfBarsInputComponent', () => {
  let component: NumberOfBarsInputComponent;
  let fixture: ComponentFixture<NumberOfBarsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOfBarsInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOfBarsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
