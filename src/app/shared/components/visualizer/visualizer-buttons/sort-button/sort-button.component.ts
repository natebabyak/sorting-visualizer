import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Algorithm } from '../../../../../core/models/algorithm';

@Component({
  selector: 'app-sort-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './sort-button.component.html',
  styleUrl: './sort-button.component.css'
})
export class SortButtonComponent {
  /**
   * The algorithm to use the implementation of to sort the array.
   */
  @Input() private algorithm!: Algorithm;

  /**
   * The array to be sorted.
   */
  @Input() private arr!: number[];

  /**
   * Handles when the sort button is clicked.
   * Sorts the array.
   */
  protected handleClick(): void {
    this.algorithm.sort(this.arr);
  }
}
