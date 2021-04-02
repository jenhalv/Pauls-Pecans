import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-pecans',
  templateUrl: './about-pecans.component.html',
  styleUrls: ['./about-pecans.component.scss']
})
export class AboutPecansComponent implements OnInit {

  result = 20;
  today: number = Date.now();
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
