import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfBarsFormFieldComponent } from './number-of-bars-form-field.component';

describe('NumberOfBarsFormFieldComponent', () => {
  let component: NumberOfBarsFormFieldComponent;
  let fixture: ComponentFixture<NumberOfBarsFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOfBarsFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOfBarsFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
