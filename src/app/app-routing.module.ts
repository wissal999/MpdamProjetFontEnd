import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BacklogComponent } from './backlog/backlog.component';
import { GestionEquipesComponent } from './gestion-equipes/gestion-equipes.component';
import { GestionProjetsComponent } from './gestion-projets/gestion-projets.component';
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanban/kanban.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'projects',component:GestionProjetsComponent ,canActivate: [AuthGuard]},
  {path:'gestionEquipes',component:GestionEquipesComponent ,canActivate: [AuthGuard]},
  {path:'backlog',component:BacklogComponent ,canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'backlog/:id',component:BacklogComponent ,canActivate: [AuthGuard]},
  {path:'kanban',component:KanbanComponent ,canActivate: [AuthGuard]},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
