import { Component } from "@angular/core";

export enum GHOST_VIEW_TYPE  {
  TABLE = 1
}

export class TableViewGhostModel {
  rows: number[];
  columns: number[];
  columnWidths: number[];

  constructor(rowCount: number = 10, columnCount: number = 1, columnWidths: number[] = [100] ) {
    this.rows = new Array(rowCount).fill('');
    this.columns = new Array(columnCount).fill('');
    this.columnWidths = columnWidths;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  ghostViewType = GHOST_VIEW_TYPE;
  ghostConfig = new TableViewGhostModel(10, 9, [5, 18, 17, 10, 10, 10, 10, 15, 5]);
  ghostTheme = {};
}