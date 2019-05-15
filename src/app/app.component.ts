import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'justinclark-dev';

  toggleSlider(): void {
      const $slider = document.getElementById('slider');
      const isOpen = $slider.classList.contains('slide-in');
      $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
  }

  closeSlider(): void {
    // TODO: close slider if open and only in small screens
  }

  ngOnInit() {
      const $menuToggler = document.getElementById('menu-toggler');
      if (window.getComputedStyle($menuToggler).display !== 'none') {
        alert('hidden');
      }
  }
}
