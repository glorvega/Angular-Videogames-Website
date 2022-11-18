import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './videogames/list/list.component';
import { CreationsComponent } from './pages/creations/creations.component';
import { DetailComponent } from './videogames/detail/detail.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateComponent } from './pages/create/create.component';

// Aqui definimos las rutas de nuestra SPA
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'videogames', component: ListComponent },
  { path: 'videogame', component: DetailComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
