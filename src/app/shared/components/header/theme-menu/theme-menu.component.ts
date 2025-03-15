import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeIconPipe } from '../../../pipes/theme-icon.pipe';
import { TitleCasePipe } from '@angular/common';
import { ThemeService } from '../../../../core/services/theme.service';
import { Theme } from '../../../../core/models/theme';

@Component({
  selector: 'app-theme-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ThemeIconPipe,
    TitleCasePipe
  ],
  templateUrl: './theme-menu.component.html',
  styleUrl: './theme-menu.component.css'
})
export class ThemeMenuComponent {
  private themeService = inject(ThemeService);
  private themes: Theme[] = ['light', 'dark', 'system'];

  /**
   * Returns the theme of the app.
   * @returns The theme of the app.
   */
  public getTheme(): Theme {
    return this.themeService.getTheme();
  }

  /**
   * Returns the list of all themes.
   * @returns The list of all themes.
   */
  public getThemes(): Theme[] {
    return this.themes;
  }

  /**
   * Sets the theme of the app.
   * @param theme The theme of the app.
   */
  public setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}
