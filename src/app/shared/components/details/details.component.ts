import { Component, Input } from '@angular/core';
import { ComplexityLatexPipe } from '../../pipes/complexity-latex.pipe';
import { IsInPlacePipe } from '../../pipes/is-in-place.pipe';
import { IsStablePipe } from '../../pipes/is-stable.pipe';
import { MatCardModule } from '@angular/material/card';
import { Algorithm } from '../../../core/models/algorithm';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    ComplexityLatexPipe,
    IsInPlacePipe,
    IsStablePipe, 
    MatCardModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() algorithm!: Algorithm;
}
