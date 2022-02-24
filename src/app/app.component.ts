import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oneTimeAccessOrientationAngle: number = 0;
  oneTimeAccessOrientationType: string = '';

  changingOrientationAngle: number = 0;
  changingOrientationType: string = '';

  constructor(){}

  ngOnInit() {
    this.oneTimeAccessOrientationAngle = window.screen.orientation.angle;
    this.oneTimeAccessOrientationType = window.screen.orientation.type;
    window.screen.orientation.onchange = this.callback as () => any;
  }
 
  callback( orientation: ScreenOrientation, ev: Event ) {
    this.changingOrientationAngle = orientation.angle;
    this.changingOrientationType = orientation.type;
  };
}
