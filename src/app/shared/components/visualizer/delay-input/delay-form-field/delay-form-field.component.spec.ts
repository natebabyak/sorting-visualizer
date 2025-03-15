import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayFormFieldComponent } from './delay-form-field.component';

describe('DelayFormFieldComponent', () => {
  let component: DelayFormFieldComponent;
  let fixture: ComponentFixture<DelayFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
