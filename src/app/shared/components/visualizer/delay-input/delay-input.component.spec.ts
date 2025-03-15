import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayInputComponent } from './delay-input.component';

describe('DelayInputComponent', () => {
  let component: DelayInputComponent;
  let fixture: ComponentFixture<DelayInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
