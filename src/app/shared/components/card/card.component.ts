import { Component, Input, OnInit } from '@angular/core';
import { SteamVideogames } from 'src/app/videogames/interfaces/steamVideogames.interface';
import { VideogamesInterface } from '../../interface/videogames.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() videogame!: VideogamesInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
