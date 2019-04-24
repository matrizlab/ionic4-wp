import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordpressService } from '../../services/wordpress.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {

  player;
  constructor(
    private activatedRoute: ActivatedRoute,
    private wpService: WordpressService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    // TODO: egnahc
    this.wpService.getData(`players/${id}`).subscribe(data => {
      console.log(data);
      this.player = data;
    });
  }

  onDelete() {
    // TODO: egnahc
    this.wpService.deleteData(`players/${this.player.id}`).subscribe(data => {
      console.log(data);
      this.wpService.refreshPlayers.next();
      this.router.navigateByUrl('/tabs');
    });
  }

}
