import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define the score value
  score = 0;

  // increment the score
  addScore(){
    this.score++;
  }
}

/*
components
control-panel
scoreboard
team-control
team-score
*/