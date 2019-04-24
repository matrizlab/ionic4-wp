import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  model: any = {};
  constructor(
    public authService: AuthService,
    public wpService: WordpressService
  ) {}

  ngOnInit() {}

  onLogin(f) {
    console.log(f.value);
    this.authService.postLogin(f.value).subscribe(
      data => {
        console.log(data);
        this.wpService.token = data['token'];
        this.authService.isAuthenticated.next(true);
      },
      err => {
        console.log(err.message);
        this.authService.isAuthenticated.next(false);
      }
    );
  }

  onLogout() {
    this.authService.isAuthenticated.next(false);
  }

}
