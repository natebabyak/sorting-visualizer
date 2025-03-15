import { Component } from '@angular/core';
import { GithubLinkComponent } from './github-link/github-link.component';
import { MatIconModule } from '@angular/material/icon';
import { ThemeMenuComponent } from './theme-menu/theme-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    GithubLinkComponent,
    MatIconModule,
    ThemeMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
