import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeIconPipe } from '../../pipes/theme-icon.pipe';
import { TitleCasePipe } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { Theme } from '../../../core/models/theme';

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
  public themes: Theme[] = ['light', 'dark', 'system'];

  public getTheme(): Theme {
    return this.themeService.getTheme();
  }

  public setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}
