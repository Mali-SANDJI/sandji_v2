import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { JournalierComponent } from './saisie/journalier/journalier.component';
import { HomeComponent } from './home/home.component';
import { StationsComponent } from './stations/stations.component';
import { ImportationComponent } from './importation/importation.component';
import { ExportationComponent } from './exportation/exportation.component';
import { TraitementComponent } from './traitement/traitement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AidesComponent } from './aides/aides.component';
import { ErreurPageComponent } from './erreur-page/erreur-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JournalierComponent,
    HomeComponent,
    StationsComponent,
    ImportationComponent,
    ExportationComponent,
    TraitementComponent,
    AidesComponent,
    ErreurPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
