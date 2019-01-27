import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chia-se-sach';

  constructor(
    private scroll: ViewportScroller
  ) {}

  gttop: boolean = false;
  @HostListener('window:scroll', []) checkPos() {
    if(this.scroll.getScrollPosition()[1]>500) {
      this.gttop = true;
    } else {
      this.gttop = false;
    }
  }

  goToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

}
