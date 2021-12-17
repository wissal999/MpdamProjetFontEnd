import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEquipesComponent } from './gestion-equipes/gestion-equipes.component';
import { GestionProjetsComponent } from './gestion-projets/gestion-projets.component';

const routes: Routes = [
  {path:'gestionProjets',component:GestionProjetsComponent},
  {path:'gestionEquipes',component:GestionEquipesComponent},
  { path: '',   redirectTo: '/gestionProjets', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
