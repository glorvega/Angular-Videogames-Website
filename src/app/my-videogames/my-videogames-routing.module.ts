import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { CreationsComponent } from './pages/creations/creations.component';

// Aqui definimos las rutas de nuestra SPA
const routes: Routes = [
  { path: '', redirectTo: 'creations', pathMatch: 'full' },
  { path: 'creations', component: CreationsComponent },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'create/:id',
    component: CreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyVideogamesRoutingModule {}
