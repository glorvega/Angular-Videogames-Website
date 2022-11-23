import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FilterGamesPipe } from './pipes/filter-games.pipe';

@NgModule({
  declarations: [CardComponent, FilterGamesPipe],
  imports: [CommonModule],
  exports: [CardComponent, FilterGamesPipe],
})
export class SharedModule {}
