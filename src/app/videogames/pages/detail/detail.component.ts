import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SteamVideogameDetails } from '../../interfaces/details.interface';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private id!: string | null;
  public videogameDetails!: SteamVideogameDetails | any;
  //public details = Object.values(this.videogameDetails);

  constructor(
    private route: ActivatedRoute,
    private videogameService: VideogamesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails(this.id as string);
  }

  getDetails(id: string) {
    this.videogameService.getVideogameDetails(id).subscribe({
      next: (videogameDetails) => {
        this.videogameDetails = videogameDetails;
        console.log(videogameDetails);
      },
      error: (error) => console.error('Error en get details: ', error),
    });
  }
}
