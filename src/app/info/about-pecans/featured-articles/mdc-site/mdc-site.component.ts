import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdc-site',
  templateUrl: './mdc-site.component.html',
  styleUrls: ['./mdc-site.component.scss']
})
export class MdcSiteComponent implements OnInit {

  CARDS = [
    {
      closed: false
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
