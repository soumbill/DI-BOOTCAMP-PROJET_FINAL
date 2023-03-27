import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedecinComponent } from './medecin/medecin.component';
import { RdvComponent } from './rdv/rdv.component';
import { HopitauxComponent } from './hopitaux/hopitaux.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { HoraireComponent } from './horaire/horaire.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { FonctionsComponent } from './fonctions/fonctions.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{
  path: '', component: PublicLayoutComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'medecin', component: MedecinComponent },
    { path: 'rdv', component: RdvComponent },
    { path: 'docteur', component: HopitauxComponent },
    { path: 'contact', component: SpecialiteComponent },
    { path: 'horaire', component: HoraireComponent },
    { path: 'service', component: FonctionsComponent },
    { path: 'about', component: AboutComponent },

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
