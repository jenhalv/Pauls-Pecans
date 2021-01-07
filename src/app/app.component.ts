import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paulspecans';

  // showToolbar: boolean;


  // constructor(
  //   private router: Router,
  //   ) { }

  // // tslint:disable-next-line:use-lifecycle-interface
  // ngOnInit(): void {
  //   this.router.events.forEach((event) => {
  //     if (event instanceof NavigationStart) {
  //       if (event.url === '/') {
  //         this.showToolbar = false;
  //       } else {
  //         this.showToolbar = true;
  //       }
  //     }
  //   });
  // }
}
