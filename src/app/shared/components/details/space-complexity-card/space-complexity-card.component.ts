import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-space-complexity-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './space-complexity-card.component.html',
  styleUrl: './space-complexity-card.component.css'
})
export class SpaceComplexityCardComponent {
  @Input() spaceComplexity!: string;
}
