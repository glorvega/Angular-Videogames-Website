import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideogamesInterface } from 'src/app/shared/interface/videogames.interface';
import { SteamVideogameDetails } from '../interfaces/details.interface';
import { SteamVideogames } from '../interfaces/steamVideogames.interface';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  private base: string = 'https://steam2.p.rapidapi.com';
  private jsonServerBase: string = ' http://localhost:3000';

  constructor(private http: HttpClient) {}

  searchVideogamesByNamePaginated(
    title: string,
    page: string
  ): Observable<SteamVideogames[]> {
    return this.http.get<SteamVideogames[]>(
      `${this.base}/search/${title}/page/${page}`,
      {
        headers: {
          'X-RapidAPI-Key':
            '28b9e1d3b5msh311b70b112b91aep1db2d4jsne515f641b131',
          'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
        },
      }
    );
  }

  searchVideogamesByName(title: string): Observable<SteamVideogames[]> {
    return this.http.get<SteamVideogames[]>(
      `${this.base}/search/${title}/page/%7Bpage%7D`,
      {
        headers: {
          'X-RapidAPI-Key':
            '28b9e1d3b5msh311b70b112b91aep1db2d4jsne515f641b131',
          'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
        },
      }
    );
  }

  getVideogameDetails(id: string): Observable<SteamVideogameDetails> {
    return this.http.get<SteamVideogameDetails>(
      `${this.base}/appDetail/${id}`,
      {
        headers: {
          'X-RapidAPI-Key':
            '28b9e1d3b5msh311b70b112b91aep1db2d4jsne515f641b131',
          'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
        },
      }
    );
  }

  postSteamGameToCollection(
    game: VideogamesInterface
  ): Observable<VideogamesInterface> {
    return this.http.post<VideogamesInterface>(
      `${this.jsonServerBase}/videogames`,
      game,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
