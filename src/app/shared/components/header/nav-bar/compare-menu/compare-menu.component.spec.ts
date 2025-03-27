import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareMenuComponent } from './compare-menu.component';

describe('CompareMenuComponent', () => {
  let component: CompareMenuComponent;
  let fixture: ComponentFixture<CompareMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
