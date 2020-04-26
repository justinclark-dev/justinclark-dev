import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-campaigndashboard',
  templateUrl: './campaigndashboard.component.html',
  styleUrls: ['./campaigndashboard.component.scss']
})
export class CampaigndashboardComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Justin Clark | Campaign Dashboard Project');
  }

  ngOnInit() {
  }

}
