import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApporteursComponent } from './apporteurs/apporteurs.component';
import { BanquesComponent } from './banques/banques.component';
import { ClientsComponent } from './clients/clients.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { DossierProspectComponent } from './dossier-prospect/dossier-prospect.component';
import { FacturationComponent } from './facturation/facturation.component';
import { MandatsComponent } from './mandats/mandats.component';
import { NotairesComponent } from './notaires/notaires.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "prospects", component: ProspectsComponent },
  { path: "prospects/dossier", component: DossierProspectComponent },
  { path: "clients", component: ClientsComponent },
  { path: "facturation", component: FacturationComponent },
  { path: "mandats", component: MandatsComponent },
  { path: "banques", component: BanquesComponent },
  { path: "apporteurs", component: ApporteursComponent },
  { path: "notaires", component: NotairesComponent },
  { path: "comparateur", component: ComparateurComponent },
  { path: "statistiques", component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
