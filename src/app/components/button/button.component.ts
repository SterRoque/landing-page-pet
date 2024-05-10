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
   @Input('textTransform') textTransform: 'uppercase' | 'none' = 'none';

   button = tv({
      base: 'font-medium text-white active:opacity-80 rounded px-4 py-2',
      variants: {
         color: {
            primary: 'bg-purple-800 border-2 border-purple-800',
            secondary: 'bg-white text-purple-800 border-2 border-purple-800',
         },
         text: {
            uppercase: 'uppercase',
            none: 'normal-case',
         },
      },
   });
}
