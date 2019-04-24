import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  players: any = [];
  constructor(
      private wpService: WordpressService,
      public authService: AuthService
  ) {
      this.getPlayers();
      this.wpService.refreshPlayers.subscribe(() => {
      this.getPlayers();
    });
  }

  getPlayers() {
    // TODO: egnahc
    this.wpService.getData('players').subscribe(data => {
      console.log(data);
      this.players = data;
      // setTimeout(() => {
      //   this.players = data;
      // }, 2000);
    });
  }

  ngOnInit() {
  }

}
