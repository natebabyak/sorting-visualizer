import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-true-property-card',
  standalone: true,
  imports: [
    MatCardModule,
    TitleCasePipe
  ],
  templateUrl: './true-property-card.component.html',
  styleUrl: './true-property-card.component.css'
})
export class TruePropertyCardComponent {
  @Input() trueProperty!: string;
}
