import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './videogames/list/list.component';
import { CreationsComponent } from './pages/creations/creations.component';
import { DetailComponent } from './videogames/detail/detail.component';

// Aqui definimos las rutas de nuestra SPA
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'videogames', component: ListComponent },
  { path: 'videogame', component: DetailComponent },
  { path: 'creations', component: CreationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
