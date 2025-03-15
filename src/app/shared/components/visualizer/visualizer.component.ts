import { Component, inject, Input } from '@angular/core';
import { ArrayService } from '../../../core/services/array.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Algorithm } from '../../../core/models/algorithm';

@Component({
  selector: 'app-visualizer',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule
  ],
  templateUrl: './visualizer.component.html',
  styleUrl: './visualizer.component.css'
})
export class VisualizerComponent {
  @Input() algorithm!: Algorithm;

  private arrayService = inject(ArrayService);
  private array: number[] = [];
  public numberOfBars: number = 100;
  private barWidth: number = 1;
  
  constructor() {
    this.array = this.arrayService.create(this.numberOfBars, 'random');
  }

  public getBarheight(number: number): number {
    return number / this.array.length * 80;
  }

  public getBarWidth(): number {
    return this.barWidth;
  }

  public getArray(): number[] {
    return this.array;
  }

  public updateBars() {
    this.array = this.arrayService.create(this.numberOfBars, 'random');
  }
}
