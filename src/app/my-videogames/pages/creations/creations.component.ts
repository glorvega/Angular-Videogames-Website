import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideogamesInterface } from 'src/app/shared/interface/videogames.interface';
import { CreationsService } from '../../services/creations.service';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss'],
})
export class CreationsComponent implements OnInit {
  public creations: VideogamesInterface[] = [];
  public inputSearch: string = '';

  constructor(
    private creationsService: CreationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getVideogames();
  }

  public getVideogames = () => {
    this.creationsService
      .getCreations()
      .subscribe((creations: VideogamesInterface[]) => {
        this.creations = creations;
      });
  };

  public filterCreations = (filter: string) => {
    if (filter === '') {
      this.getVideogames();
    } else {
      this.creations = this.creations.filter((creation) =>
        creation.title.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  public editCreation = (game: VideogamesInterface) => {
    this.router.navigate(['create', game.id]);
  };

  public deleteCreation = (game: VideogamesInterface) => {
    this.creationsService.deleteCreation(game.id).subscribe({
      next: (id: any) => {
        this.getVideogames();
      },
      error: (error) => {
        console.log(error);
      },
    });
  };
}
