import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  page;
  constructor(
    private activatedRoute: ActivatedRoute,
    private wpService: WordpressService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    // TODO: egnahc
    this.wpService.getData(`pages/${id}`).subscribe(data => {
      console.log(data);
      this.page = data;
    });
  }

}
