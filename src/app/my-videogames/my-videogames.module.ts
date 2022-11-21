import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { CreationsComponent } from './pages/creations/creations.component';
import { MyVideogamesRoutingModule } from './my-videogames-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent,
    CreationsComponent
  ],
  exports: [
    CreateComponent,
    CreationsComponent
  ],
  imports: [
    CommonModule,
    MyVideogamesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MyVideogamesModule { }
