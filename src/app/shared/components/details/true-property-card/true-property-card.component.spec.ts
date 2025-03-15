import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruePropertyCardComponent } from './true-property-card.component';

describe('TruePropertyCardComponent', () => {
  let component: TruePropertyCardComponent;
  let fixture: ComponentFixture<TruePropertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruePropertyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruePropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
