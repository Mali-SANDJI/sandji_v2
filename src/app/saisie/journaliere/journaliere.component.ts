import { Component } from '@angular/core';

@Component({
  selector: 'app-journaliere',
  templateUrl: './journaliere.component.html',
  styleUrls: ['./journaliere.component.css']
})
export class JournaliereComponent {

  // page.component.ts
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  data = {
    Lundi: '',
    Mardi: '',
    Mercredi: '',
    Jeudi: '',
    Vendredi: '',
    Samedi: '',
    Dimanche: ''
  };

  submit() {
    // récupérer les données saisies
    console.log(this.data);
  }

}

