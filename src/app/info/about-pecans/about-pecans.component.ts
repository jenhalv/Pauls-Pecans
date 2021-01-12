import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-pecans',
  templateUrl: './about-pecans.component.html',
  styleUrls: ['./about-pecans.component.scss']
})
export class AboutPecansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
