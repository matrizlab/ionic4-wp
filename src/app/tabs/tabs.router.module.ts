import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'players',
        children: [
          {
            path: '',
            loadChildren: '../players/players.module#PlayersPageModule'
          }
        ]
      },
      {
        path: 'players/player-edit',
        children: [
          {
            path: '',
            loadChildren: '../players/player-edit/player-edit.module#PlayerEditPageModule'
          }
        ]
      },
      {
        path: 'players/:id/edit',
        children: [
          {
            path: '',
            loadChildren: '../players/player-edit/player-edit.module#PlayerEditPageModule'
          }
        ]
      },
      {
        path: 'players/:id',
        children: [
          {
            path: '',
            loadChildren:
              '../players/player-details/player-details.module#PlayerDetailsPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/players',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/players',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
