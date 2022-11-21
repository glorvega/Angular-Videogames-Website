import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideogamesInterface } from 'src/app/shared/interface/videogames.interface';

@Injectable({
  providedIn: 'root',
})
export class CreationsService {
  constructor(private http: HttpClient) {}

  getCreations(): Observable<VideogamesInterface[]> {
    return this.http.get<VideogamesInterface[]>(
      'http://localhost:3000/videogames'
    );
  }

  deleteCreation(id: string | undefined): Observable<VideogamesInterface> {
    return this.http.delete<VideogamesInterface>(
      `http://localhost:3000/videogames/${id}`
    );
  }

  getCreation(id: string): Observable<VideogamesInterface> {
    return this.http.get<VideogamesInterface>(
      `http://localhost:3000/videogames/${id}`
    );
  }
}
