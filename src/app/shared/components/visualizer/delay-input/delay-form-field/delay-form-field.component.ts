import { Component, Input,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delay-form-field',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './delay-form-field.component.html',
  styleUrl: './delay-form-field.component.css'
})
export class DelayFormFieldComponent {
  @Input() protected delay!: number;
}
