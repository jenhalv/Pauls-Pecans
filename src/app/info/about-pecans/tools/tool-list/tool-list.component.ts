import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements OnInit {

  value = 'Tools: Tool box, Pruners, Hammer, Flagging, Cloth ties, Pocket knife, Aluminum foil, Electrical tape, Masking tape, Rubber bands, Flair writing pen/Sharpie, Sandwich baggies, Bow saw/chainsaw, Cooler with ice pack, Eye glasses (if needed), Wood lathes, 1 ¼” nails, Graft wood, ⅝ x 18 wire nails (or equivalent)';

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  copyToClipboard(): void {
    this.snackBar.open('The list of grafting tools has been copied to your clipboard.', 'OK', {
      duration: 10000,
   });
  }
}
