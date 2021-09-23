import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: 'team-component', component: TeamComponent},
  { path: 'player-component', component: PlayerComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
