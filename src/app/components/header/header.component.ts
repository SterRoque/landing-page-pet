import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, ButtonComponent],
  viewProviders: [provideIcons({ heroMagnifyingGlass })],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
