import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  type = "table";
  config = {
    columns: [
      "Sr No",
      "Name",
      "Subject",
      "Mobile Number",
      "Description",
      "status"
    ],
    columnWidths: [5, 15, 15, 15, 35, 15],
    rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  };

  theme = {
    "background-color": "lightblue",
    padding: "10px",
   
    th: {
      "background-color": "lightpink",
      span: {
        padding: "10px 0"
      }
    },
    td: {
      "background-color": "lightgray",
      span: {
        padding: "10px 0"
      }
    }
  };
}
