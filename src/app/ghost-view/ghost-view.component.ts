import { Component, OnInit, Input } from '@angular/core';

export class TableViewGhostModel {
  rows: number[];
  columns: number[];
  columnWidths: number[];
}

@Component({
  selector: 'app-ghost-view',
  templateUrl: './ghost-view.component.html',
  styleUrls: ['./ghost-view.component.scss']
})

export class GhostViewComponent implements OnInit {

  @Input() type;
  @Input() config: TableViewGhostModel;
  @Input() theme: any;

  constructor() {}

  ngOnInit() {
    if(!this.config) {
      this.config = new TableViewGhostModel();
    }

    if(!this.theme) {
      this.theme = {};
    }
  }
}
