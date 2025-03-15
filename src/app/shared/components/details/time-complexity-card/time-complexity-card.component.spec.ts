import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeComplexityCardComponent } from './time-complexity-card.component';

describe('TimeComplexityCardComponent', () => {
  let component: TimeComplexityCardComponent;
  let fixture: ComponentFixture<TimeComplexityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeComplexityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeComplexityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
