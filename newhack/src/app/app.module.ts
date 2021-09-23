import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { LoginTeamComponent } from './login-team/login-team.component';
import { LoginPlayerComponent } from './login-player/login-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlayerComponent,
    TeamComponent,
    LoginTeamComponent,
    LoginPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
