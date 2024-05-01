import { Component, Input } from '@angular/core';
import { tv, type VariantProps } from 'tailwind-variants';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input('title') title: string = '';
  @Input('variant') variant: 'primary' | 'secondary' = 'primary';

  button = tv({
    base: 'font-medium text-white active:opacity-80 rounded px-4 py-2',
    variants: {
      color: {
        primary: 'bg-red-400 border-2 border-red-400',
        secondary: 'bg-white text-red-400 border-2 border-red-400',
      },
    },
  });
}
