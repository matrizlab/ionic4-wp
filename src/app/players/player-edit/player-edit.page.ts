import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.page.html',
  styleUrls: ['./player-edit.page.scss'],
})
export class PlayerEditPage implements OnInit {

  model: any = {};
  id;
  constructor(
    private wpService: WordpressService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      // TODO: egnahc
      this.wpService.getData(`players/${this.id}`).subscribe(data => {
        console.log(data);
        this.model = {
          title: data['title'].rendered,
          content: data['content'].rendered,
          status: data['status']
        };
      });
    }
  }
  onEditPlayer(f) {
    console.log(f.value);
    if (this.id) {
      // TODO: egnahc
      this.wpService.putData(`players/${this.id}`, f.value).subscribe(data => {
        console.log(data);
        this.wpService.refreshPlayers.next();
        this.router.navigateByUrl('/tabs');
      });
    } else {
      // TODO: egnahc
      this.wpService.postData('players', f.value).subscribe(data => {
        console.log(data);
        this.wpService.refreshPlayers.next();
        this.router.navigateByUrl('/tabs');
      });
    }
  }

}
