import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  VIDEOS =  [
    {
      title: 'Grafting Tools',
      information: 'testing to see how this looks.',
      videoId: 'https://www.youtube.com/embed/vdaT268gyrY',
    },
    {
      title: 'Grafting Tools',
      videoId: 'assets/Images/Pecan-Pie.jpg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
