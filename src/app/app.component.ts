import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('state', [
      state('start', style({ opacity: 0 })),
      state('end', style({ opacity: 1 })),
      transition('start => end', animate('1000ms ease-in')),
      transition('end => start', animate('1000ms ease-out'))
    ])
 ]
})
export class AppComponent {
  title = 'crowfun';
  state = 'start';

 toggleState() {
    this.state = this.state === 'start' ? 'end' : 'start';
 }
}
