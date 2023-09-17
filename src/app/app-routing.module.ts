import { HomeComponent } from './home/home.component';
import { JournalierComponent } from './saisie/journalier/journalier.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'jour', component: JournalierComponent },


  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirection vers la page d'acceul`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
