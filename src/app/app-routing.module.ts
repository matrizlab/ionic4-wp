import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'players', loadChildren: './players/players.module#PlayersPageModule' },
  { path: 'player-details', loadChildren: './players/player-details/player-details.module#PlayerDetailsPageModule' },
  { path: 'player-edit', loadChildren: './players/player-edit/player-edit.module#PlayerEditPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
