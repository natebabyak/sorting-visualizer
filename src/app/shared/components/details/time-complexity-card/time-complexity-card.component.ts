import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TimeComplexity } from '../../../../core/models/time-complexity';

@Component({
  selector: 'app-time-complexity-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './time-complexity-card.component.html',
  styleUrl: './time-complexity-card.component.css'
})
export class TimeComplexityCardComponent {
  @Input() timeComplexity!: TimeComplexity;
}
