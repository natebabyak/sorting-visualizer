import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsePropertyCardComponent } from './false-property-card.component';

describe('FalsePropertyCardComponent', () => {
  let component: FalsePropertyCardComponent;
  let fixture: ComponentFixture<FalsePropertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FalsePropertyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalsePropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
