import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const handyClock: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  AfterViewInit(): void {
    handyClock();
  }
}
