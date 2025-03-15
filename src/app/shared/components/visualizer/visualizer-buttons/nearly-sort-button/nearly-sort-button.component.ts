import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArrayService } from '../../../../../core/services/array.service';

@Component({
  selector: 'app-nearly-sort-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './nearly-sort-button.component.html',
  styleUrl: './nearly-sort-button.component.css'
})
export class NearlySortButtonComponent {
  /**
   * The array service.
   */
  private arrayService = inject(ArrayService);

  /**
   * The array to be nearly sorted.
   */
  @Input() private arr!: number[]

  /**
   * Handles when the nearly sort button is clicked.
   * Nearly sorts the array.
   */
  protected handleClick(): void {
    this.arrayService.sortDescending(this.arr);
  }
}
