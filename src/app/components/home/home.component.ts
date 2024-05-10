import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';
import { CardInformationComponent } from '../card-information/card-information.component';
import { CardPetComponent } from '../card-pet/card-pet.component';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [
      HeaderComponent,
      ButtonComponent,
      CardInformationComponent,
      CardPetComponent,
   ],
   templateUrl: './home.component.html',
   styleUrl: './home.component.css',
})
export class HomeComponent {}
