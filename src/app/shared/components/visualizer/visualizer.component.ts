import { Component, inject } from '@angular/core';
import { ArrayService } from '../../../core/services/array.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-visualizer',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatInputModule
  ],
  templateUrl: './visualizer.component.html',
  styleUrl: './visualizer.component.css'
})
export class VisualizerComponent {
  private arrayService = inject(ArrayService);
  public numbers: number[];
  public barWidth: number;

  constructor() {
    this.numbers = this.arrayService.create(100, 'random');
    this.barWidth = 100 / this.numbers.length;
  }
}
