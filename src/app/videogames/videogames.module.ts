import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';
import { VideogamesRoutingModule } from './videogames-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DetailComponent,
    ListComponent
  ],
  exports: [
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    VideogamesRoutingModule,
    SharedModule
  ]
})
export class VideogamesModule { }
