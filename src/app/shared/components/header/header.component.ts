import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { RouterLink } from '@angular/router';
import { ThemeMenuComponent } from '../theme-menu/theme-menu.component';
import { Algorithm } from '../../../core/models/algorithm';
import { AlgorithmsService } from '../../../core/services/algorithms.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatTabsModule, 
    RouterLink,
    ThemeMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public algorithms: Algorithm[];

  constructor(private algorithmsService: AlgorithmsService) {
    this.algorithms = this.algorithmsService.getAllAlgorithms();
  }
}
