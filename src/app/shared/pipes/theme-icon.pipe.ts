import { Pipe, PipeTransform } from '@angular/core';
import { Theme } from '../../core/models/theme';

@Pipe({
  name: 'themeIcon'
})
export class ThemeIconPipe implements PipeTransform {
  /**
   * Transforms a theme into its icon representation.
   * @param theme The theme to transform.
   * @returns The icon representation of the theme.
   */
  public transform(theme: Theme): string {
    if (theme === 'system') {
      return 'contrast';
    }

    return `${theme}_mode`;
  }
}
