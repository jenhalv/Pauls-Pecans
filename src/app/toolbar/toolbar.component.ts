import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}

