import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Store';
  score: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onRateChange = (score) => {
    this.score = score;
  }

}
