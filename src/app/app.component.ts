import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Andack First Application';
  author = 'Andres Fdo Chalarca Lopez';
  count = 0;
  imgSource = './../favicon.ico';
  enable = true;
}
