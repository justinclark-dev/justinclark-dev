import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wickedawesomepizza',
  templateUrl: './wickedawesomepizza.component.html',
  styleUrls: ['./wickedawesomepizza.component.scss']
})
export class WickedawesomepizzaComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Justin Clark | Wicked Awesome Pizza Project');
  }

  ngOnInit() {
  }

}
