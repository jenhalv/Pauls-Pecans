import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-grafting',
  templateUrl: './grafting.component.html',
  styleUrls: ['./grafting.component.scss']
})
export class GraftingComponent implements OnInit {

    constructor(private viewportScroller: ViewportScroller) { }

    ngOnInit(): void {
    }

    onClickScroll(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }
