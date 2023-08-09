import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { JournaliereComponent } from './saisie/journaliere/journaliere.component';
import { DecadaireComponent } from './saisie/decadaire/decadaire.component';
import { MensuelleComponent } from './saisie/mensuelle/mensuelle.component';
import { HebdomadaireComponent } from './traitement/hebdomadaire/hebdomadaire.component';
import { InfoComponent } from './info/info.component';
import { ImpExpComponent } from './imp-exp/imp-exp.component';
import { StationsComponent } from './stations/stations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JournaliereComponent,
    DecadaireComponent,
    MensuelleComponent,
    HebdomadaireComponent,
    InfoComponent,
    ImpExpComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
