import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HopitauxComponent } from './hopitaux/hopitaux.component';
import { RdvComponent } from './rdv/rdv.component';
import { MedecinComponent } from './medecin/medecin.component';
import { HoraireComponent } from './horaire/horaire.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicHerderComponent } from './public-herder/public-herder.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FonctionsComponent } from './fonctions/fonctions.component';

@NgModule({
  declarations: [
    // Définition des composants du module public
    HomeComponent,
    HopitauxComponent,
    RdvComponent,
    MedecinComponent,
    HoraireComponent,
    SpecialiteComponent,
    PublicLayoutComponent,
    PublicHeaderComponent,
    PublicHerderComponent,
    ServiceComponent,
    AboutComponent,
    ServicesComponent,
    FonctionsComponent
  ],
  imports: [
    // Importation des modules nécessaires au module public
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
