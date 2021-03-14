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
      title: 'Production',
      image: 'assets/Images/tassels.jpg',
      imageAlt: 'pecan tassels on a tree',
      content: '"A society grows great when old men plant trees whose shade they know they shall never sit in." ~ Greek Proverb',
      path: 'production',
      label: 'click to learn more about grafting trees',
    },
    {
      title: 'Pricing',
      image: 'assets/Images/tree.jpg',
      imageAlt: 'pecans in husk',
      content: 'We produce & sell quality organic fresh raw pecans grown on our responsibly-farmed orchard.',
      path: 'pricing',
      label: 'click to learn more about the pecans we sell',
    },
    {
      title: 'Tradition',
      image: 'assets/Images/flower.jpg',
      imageAlt: 'pecan flower',
      content: 'Our family has been growing & grafting pecan trees for 46 years in southwestern Missouri.',
      path: 'tradition',
      label: 'click to learn more about our family tradition',
    }
];


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  // info(card: any): void{
  //   this.router.navigate(['info', card.path]);
  //   console.log('what happens', card.title);
  //   }
}
