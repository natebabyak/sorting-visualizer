import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Algorithm } from '../../../core/models/algorithm';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() algorithm!: Algorithm;
}
