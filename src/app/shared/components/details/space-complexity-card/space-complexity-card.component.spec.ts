import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceComplexityCardComponent } from './space-complexity-card.component';

describe('SpaceComplexityCardComponent', () => {
  let component: SpaceComplexityCardComponent;
  let fixture: ComponentFixture<SpaceComplexityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceComplexityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceComplexityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
