import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../core/interface/route.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private base: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getRoutes(): Observable<Route[]>{
    return this.http.get<Route[]>(`${this.base}/routes`);
  }
}
