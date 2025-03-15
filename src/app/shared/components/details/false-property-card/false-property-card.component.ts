import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-false-property-card',
  standalone: true,
  imports: [
    MatCardModule,
    TitleCasePipe
  ],
  templateUrl: './false-property-card.component.html',
  styleUrl: './false-property-card.component.css'
})
export class FalsePropertyCardComponent {
  @Input() falseProperty!: string;
}
