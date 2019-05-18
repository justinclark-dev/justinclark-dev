import { Component, OnInit } from '@angular/core';
import { slideInMenu, slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInMenu,
    slideInAnimation
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
    const $menuTogglerSize = $menuToggler.getBoundingClientRect();
    if (!$menuTogglerSize.width && !$menuTogglerSize.height) {
      this.mobileMode = false;
    } else {
      this.mobileMode = true;
      this.sliderOpen = false;
    }
  }
}
