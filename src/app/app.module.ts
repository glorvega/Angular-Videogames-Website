import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { VideogamesModule } from './videogames/videogames.module';
import { AppRoutingModule } from './app-routing.module';
import { CreationsComponent } from './pages/creations/creations.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    CreationsComponent,
  ],
  imports: [
    VideogamesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
