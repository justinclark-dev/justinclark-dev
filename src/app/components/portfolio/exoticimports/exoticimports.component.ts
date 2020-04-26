import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exoticimports',
  templateUrl: './exoticimports.component.html',
  styleUrls: ['./exoticimports.component.scss']
})
export class ExoticimportsComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Justin Clark | Exotic Imports Project');
  }

  ngOnInit() {
  }

}
