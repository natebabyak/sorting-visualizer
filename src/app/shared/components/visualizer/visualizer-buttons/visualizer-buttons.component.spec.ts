import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerButtonsComponent } from './visualizer-buttons.component';

describe('VisualizerButtonsComponent', () => {
  let component: VisualizerButtonsComponent;
  let fixture: ComponentFixture<VisualizerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizerButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
