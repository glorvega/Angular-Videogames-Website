import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { VideogamesModule } from './videogames/videogames.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { AppService } from './services/app.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { MyVideogamesModule } from './my-videogames/my-videogames.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    
  ],
  imports: [
    VideogamesModule,
    MyVideogamesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
