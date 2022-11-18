import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { VideogamesModule } from './videogames/videogames.module';
import { AppRoutingModule } from './app-routing.module';
import { CreationsComponent } from './pages/creations/creations.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { HttpClientModule } from '@angular/common/http'
import { AppService } from './services/app.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CreationsComponent,
    CreateComponent,
    
  ],
  imports: [
    VideogamesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    SharedModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
