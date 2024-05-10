import { Component, Input } from '@angular/core';

@Component({
   selector: 'card-information',
   standalone: true,
   imports: [],
   templateUrl: './card-information.component.html',
   styleUrl: './card-information.component.css',
})
export class CardInformationComponent {
   @Input('img-path') path: string = '';
   @Input('title') title: string = '';
   @Input('description') description: string = '';
}
