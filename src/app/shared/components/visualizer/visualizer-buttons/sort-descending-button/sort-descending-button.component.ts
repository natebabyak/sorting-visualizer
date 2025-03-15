import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArrayService } from '../../../../../core/services/array.service';

@Component({
  selector: 'app-sort-descending-button',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './sort-descending-button.component.html',
  styleUrl: './sort-descending-button.component.css'
})
export class SortDescendingButtonComponent {
  /**
   * The array service.
   */
  private arrayService = inject(ArrayService);

  /**
   * The array to be sorted in descending order.
   */
  @Input() private arr!: number[]

  /**
   * Handles when the sort descending button is clicked.
   * Sorts the array in descending order.
   */
  protected handleClick(): void {
    this.arrayService.sortDescending(this.arr);
  }
}
