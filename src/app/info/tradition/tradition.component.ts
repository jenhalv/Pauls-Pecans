import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tradition',
  templateUrl: './tradition.component.html',
  styleUrls: ['./tradition.component.scss']
})
export class TraditionComponent implements OnInit {

    CARDS = [
      {
        image: 'assets/Images/Pop1.jpg',
        imageAlt: 'Pop',
        caption: 'Pop grafting a young pecan tree.',
      },
      {
        image: 'assets/Images/Family.jpg',
        imageAlt: 'Droz Family',
        caption: 'Droz Family',
      },
      {
        image: 'assets/Images/Ally.jpg',
        imageAlt: 'Ally',
        caption: 'Ally catching a ride in Pop\'s truck.',
      },
      {
        image: 'assets/Images/Pop5.jpg',
        imageAlt: 'Pop',
        caption: 'Pop trimming a grafted tree.',
      },
      {
        image: 'assets/Images/Pop.jpg',
        imageAlt: 'Pop & Ally',
        caption: 'Pop & Ally grafting a tree.',
      },
      {
        image: 'assets/Images/Pop3.jpg',
        imageAlt: 'Pop',
        caption: 'Pop trimming a grafted tree.',
      }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
