import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideogamesInterface } from 'src/app/shared/interface/videogames.interface';
import { VideogamesService } from '../services/videogames.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  videogames!: VideogamesInterface[];

  constructor(private videogamesService: VideogamesService, private router: Router) {}

  ngOnInit(): void {
    this.getVideogamesByName('COUNTER');
  }

  getVideogamesByName(name: string) {
    this.videogamesService.searchVideogamesByName(name).subscribe({
      next: (videogames) => {
        const videogamesArray: VideogamesInterface[] = [];
        videogames.forEach((videogame) => {
          videogamesArray.push({
            id: videogame.appId,
            title: videogame.title,
            cover: videogame.imgUrl,
            year: videogame.released,
          });
        });
        this.videogames = videogamesArray;
      },
      error: (error) => console.error('Error en get routes: ', error),
    });
  }

  goToDetails(id: string){
    //this.router.navigate(['details',  id])
  }
}
