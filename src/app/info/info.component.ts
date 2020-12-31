import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  CARDS = [
    {
      title: 'About',
      image: 'assets/Images/tassels.jpg',
      imageAlt: 'tassels on a tree',
      content: 'Our family has been growing & grafting organic pecan trees for 46 years in southwestern Missouri.'
    },
    {
      title: 'Product',
      image: 'assets/Images/tree.jpg',
      imageAlt: 'pecans',
      content: 'We produce quality organic fresh raw pecans grown on our responsibly-farmed orchard.',
    },
    {
      title: 'Tradition',
      image: 'assets/Images/flower.jpg',
      imageAlt: 'pecan flower',
      content: '"A society grows great when old men plant trees whose shade they know they shall never sit in." ~ Greek Proverb',
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
