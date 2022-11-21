import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreationsInterface } from '../interface/creations.interface';

@Injectable({
  providedIn: 'root'
})
export class CreationsService {

  constructor( private http: HttpClient ) { }

  getCreations(): Observable<CreationsInterface[]>{
    return this.http.get<CreationsInterface[]>('http://localhost:3000/videogames');
  }
}
