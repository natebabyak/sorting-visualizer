import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArrayService } from '../../../../../core/services/array.service';

@Component({
  selector: 'app-shuffle-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule, 
    MatTooltipModule
  ],
  templateUrl: './shuffle-button.component.html',
  styleUrl: './shuffle-button.component.css'
})
export class ShuffleButtonComponent {
  /**
   * The array service.
   */
  private arrayService = inject(ArrayService);

  /**
   * The array to be shuffled.
   */
  @Input() private arr!: number[];

  /**
   * Handles when the shuffle button is clicked.
   * Shuffles the array.
   */
  protected handleClick(): void {
    this.arrayService.shuffle(this.arr);
  }
}
