import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/services/app.service';
import { Route } from '../interface/route.interface';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="navigator">
      <nav>
        <ul>
          <li *ngFor="let route of routes" (click)="navigateTo(route.route)">
            <img
              *ngIf="route.img"
              [src]="'../../../assets/images/' + route.img"
              [alt]="route.alt"
            />
            <a *ngIf="!route.img"> {{ route.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [
    `
      .navigator {
        position: sticky;
        top: 0;
        z-index: 1;

        nav {
          display: flex;
          justify-content: center;
          background-color: #000002;

          ul {
            margin-top: 10px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 70%;
            border-radius: 20px;

            a {
              text-transform: uppercase;
              cursor: pointer;
              &:hover {
                color: #77c3b1;
              }
            }

            .container-logout {
              font-size: 20px;
              justify-content: center;
              align-items: center;
              color: inherit;
              text-transform: uppercase;
              display: flex;
              gap: 10px;

              button {
                background-color: #000002;
                color: whitesmoke;
                text-transform: uppercase;
                cursor: pointer;
                font-size: 15px;
                margin-left: 20px;

                &:hover {
                  color: #77c3b1;
                }
              }
            }

            .inputbox {
              width: 20rem;
              height: 2rem;

              background: #f2f2f2;

              border: 1px solid #cccccc;
              border-radius: 2rem;
              outline: none;

              font-size: 20px;
              text-align: center;
              color: #737373;
              letter-spacing: 1px;
            }

            img {
              height: 80px;
              width: auto;
              cursor: pointer;

              &:hover {
                transform: scale(1.1);
              }
            }
          }
        }
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  //Exclamación para no tener que inicializar la variable
  routes!: Route[];

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.getRoutesNavbar();
  }

  getRoutesNavbar() {
    this.appService.getRoutes().subscribe({
      next: (routes) => (this.routes = routes),
      error: (error) => console.error('Error en get routes: ', error),
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
