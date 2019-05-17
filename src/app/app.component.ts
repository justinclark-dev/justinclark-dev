import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('closed', style({
        opacity: 0.5,
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'justinclark-dev';
  sliderOpen = true;
  mobileMode = false;

  toggle(): void {
    this.sliderOpen = !this.sliderOpen;
  }

  closeSlider(): void {
    if (this.sliderOpen === true && this.mobileMode === true) {
      this.sliderOpen = false;
    }
  }

  ngOnInit(): void {
    const $menuToggler = document.getElementById('menu-toggler');
    if (!$menuToggler.offsetWidth && !$menuToggler.offsetHeight) {
      this.mobileMode = false;
    } else {
      this.mobileMode = true;
      this.sliderOpen = false;
    }
  }
}
