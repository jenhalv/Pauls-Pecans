import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  CARDS = [
    {
      id: 'about',
      title: 'About',
      image: 'assets/Images/tassels.jpg',
      imageAlt: 'tassels on a tree',
      content: 'Our family has been growing & grafting organic pecan trees for 46 years in southwestern Missouri.'
    },
    {
      id: 'product',
      title: 'Product',
      image: 'assets/Images/tree.jpg',
      imageAlt: 'pecans',
      content: 'We produce quality organic fresh raw pecans grown on our responsibly-farmed orchard.',
    },
    {
      id: 'tradition',
      title: 'Tradition',
      image: 'assets/Images/flower.jpg',
      imageAlt: 'pecan flower',
      content: '"A society grows great when old men plant trees whose shade they know they shall never sit in." ~ Greek Proverb',
    }
];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  // selectLearnMore(id: string): void {
  //   this.router.navigate(['info', id]);
  // }
}
