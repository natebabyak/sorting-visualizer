import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearlySortButtonComponent } from './nearly-sort-button.component';

describe('NearlySortButtonComponent', () => {
  let component: NearlySortButtonComponent;
  let fixture: ComponentFixture<NearlySortButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearlySortButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearlySortButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
