import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDescendingButtonComponent } from './sort-descending-button.component';

describe('SortDescendingButtonComponent', () => {
  let component: SortDescendingButtonComponent;
  let fixture: ComponentFixture<SortDescendingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortDescendingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortDescendingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
