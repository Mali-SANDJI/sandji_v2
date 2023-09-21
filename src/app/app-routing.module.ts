import { ExportationComponent } from './exportation/exportation.component';
import { HomeComponent } from './home/home.component';
import { ImportationComponent } from './importation/importation.component';
import { JournalierComponent } from './saisie/journalier/journalier.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraitementComponent } from './traitement/traitement.component';
import { StationsComponent } from './stations/stations.component';
import { AidesComponent } from './aides/aides.component';
import { ErreurPageComponent } from './erreur-page/erreur-page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'jour', component: JournalierComponent },
  { path: 'import', component: ImportationComponent },
  { path: 'export', component: ExportationComponent },
  { path: 'traitement', component: TraitementComponent },
  { path: 'station', component: StationsComponent },
  { path: 'aide', component: AidesComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirection vers la page d'acceul`
  { path: '**', component: ErreurPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
