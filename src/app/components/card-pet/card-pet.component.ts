import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
   selector: 'card-pet',
   standalone: true,
   imports: [ButtonComponent],
   templateUrl: './card-pet.component.html',
   styleUrl: './card-pet.component.css',
})
export class CardPetComponent {
   @Input('path') path: string = '';
   @Input('name') name: string = '';
   @Input('age') age: string = '';
   @Input('description') description: string = '';
}
