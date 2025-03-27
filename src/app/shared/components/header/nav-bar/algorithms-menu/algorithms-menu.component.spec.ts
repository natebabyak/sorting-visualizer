import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmsMenuComponent } from './algorithms-menu.component';

describe('AlgorithmsMenuComponent', () => {
  let component: AlgorithmsMenuComponent;
  let fixture: ComponentFixture<AlgorithmsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
