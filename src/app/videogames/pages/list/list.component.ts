import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideogamesInterface } from 'src/app/shared/interface/videogames.interface';
import { SteamVideogames } from '../../interfaces/steamVideogames.interface';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  videogames!: VideogamesInterface[];
  public inputSearch: string = '';

  constructor(
    private videogamesService: VideogamesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getVideogamesByName('COUNTER');
  }

  getVideogamesByName(name: string) {
    this.videogamesService.searchVideogamesByName(name).subscribe({
      next: (videogames) => {
        const videogamesArray: VideogamesInterface[] = [];
        videogames.forEach((videogame) => {
          videogamesArray.push({
            title: videogame.title,
            cover: videogame.imgUrl,
            year: videogame.released,
            appId: videogame.appId,
          });
        });
        this.videogames = videogamesArray;
      },
      error: (error) => console.error('Error en get routes: ', error),
    });
  }

  public filterVideogames = (filter: string) => {
    console.log(filter);
    if (filter === '') {
      this.getVideogamesByName('COUNTER');
    } else {
      this.getVideogamesByName(filter);
    }
  };

  goToDetails = (game: VideogamesInterface) => {
    console.log(game);
    this.router.navigate(['details', game.appId]);
  };

  addToCollection = (game: VideogamesInterface) => {
    this.videogamesService.postSteamGameToCollection(game).subscribe({
      next: (videogame) => {
        this.router.navigate(['creations']);
      },
      error: (error) => console.error('Error en get routes: ', error),
    });
  };
}
