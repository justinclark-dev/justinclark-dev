import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfoliowebsite',
  templateUrl: './portfoliowebsite.component.html',
  styleUrls: ['./portfoliowebsite.component.scss']
})
export class PortfoliowebsiteComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Justin Clark | Portfolio Website Project');
  }

  ngOnInit() {
  }

}
