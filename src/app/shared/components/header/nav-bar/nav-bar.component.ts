import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { Algorithm } from '../../../../core/models/algorithm';
import { AlgorithmsService } from '../../../../core/services/algorithms.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    RouterLink,
    MatMenuTrigger
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @ViewChild(MatMenuTrigger) algorithmsTrigger!: MatMenuTrigger;
  @ViewChild(MatMenuTrigger) compareTrigger!: MatMenuTrigger;

  private readonly algorithms: Algorithm[];

  constructor(private algorithmsService: AlgorithmsService) {
    this.algorithms = this.algorithmsService.getAlgorithms();
  }

  /**
   * Gets the list of all algorithms.
   * @returns The list of all algorithms.
   */
  protected getAlgorithms(): Algorithm[] {
    return this.algorithms;
  }

  /**
   * Opens the algorithms menu.
   */
  protected openAlgorithmsMenu(): void {
    this.algorithmsTrigger.openMenu();
  }

  /**
   * Opens the compare menu.
   */
  protected openCompareMenu(): void {
    this.compareTrigger.openMenu();
  }

  /**
   * Closes the algorithms menu.
   */
  protected closeAlgorithmsMenu(): void {
    this.algorithmsTrigger.closeMenu();
  }

  /**
   * Closes the compare menu.
   */
  protected closeCompareMenu(): void {
    this.compareTrigger.closeMenu();
  }
}
