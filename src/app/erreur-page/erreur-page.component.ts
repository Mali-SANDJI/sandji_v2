import { style, transition, trigger, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-erreur-page',
  templateUrl: './erreur-page.component.html',
  styleUrls: ['./erreur-page.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ErreurPageComponent {

}
