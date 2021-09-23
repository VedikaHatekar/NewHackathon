import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPlayerComponent } from './login-player/login-player.component';
import { LoginTeamComponent } from './login-team/login-team.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [

  { path: 'login-player', component: LoginPlayerComponent},
  { path: 'login-team', component: LoginTeamComponent},
  // { path: '',   redirectTo: '/login-player', pathMatch: 'full' },
  // { path: '',   redirectTo: '/login-team', pathMatch: 'full' },
  { path: 'view-all-players', component: TeamComponent},
  { path: 'view-player', component: PlayerComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
