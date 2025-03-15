import { Injectable } from '@angular/core';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /**
   * The theme of the app.
   */
  private theme: Theme;

  /**
   * Initializes the theme.
   */
  constructor() {
    const saved = localStorage.getItem('data-theme') as Theme | null;
    this.theme = saved ?? 'system';
    this.updateTheme();
  }

  /**
   * Gets the theme.
   * @returns The theme.
   */
  public getTheme(): Theme {
    return this.theme;
  }

  /**
   * Sets the theme.
   * @param theme The theme.
   */
  public setTheme(theme: Theme): void {
    this.theme = theme;
    localStorage.setItem('data-theme', this.theme);
    this.updateTheme();
  }

  /**
   * Updates the theme.
   */
  private updateTheme(): void {
    if (this.theme === 'system') {
      document.body.style.colorScheme = 'light dark';
    } else {
      document.body.style.colorScheme = this.theme;
    }
  }
}
