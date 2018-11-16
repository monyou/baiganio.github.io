import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserDataService } from '../../core/services/user-data/user-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public constructor() { }

  ngOnInit() { }
}
