import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T2110E-Angular';
  months=["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  showage=false;
}
