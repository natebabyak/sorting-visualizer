import { Injectable } from '@angular/core';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /**
   * The current theme of the app.
   */
  private theme: Theme;

  constructor() {
    const saved = localStorage.getItem('data-theme') as Theme | null;
    this.theme = saved ?? 'system';
    this.applyTheme();
  }

  /**
   * Gets the current theme of the app.
   * @returns The current theme of the app.
   */
  public getTheme(): Theme {
    return this.theme;
  }

  /**
   * Sets the theme of the app.
   * @param theme The new theme of the app.
   */
  public setTheme(theme: Theme): void {
    this.theme = theme;
    localStorage.setItem('data-theme', this.theme);
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.theme === 'system') {
      document.body.style.colorScheme = 'light dark';
    } else {
      document.body.style.colorScheme = this.theme;
    }
  }
}
