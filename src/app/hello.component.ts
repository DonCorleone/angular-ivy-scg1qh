import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'hello',
  template: `<h1>papa 700{{ num | async }}</h1>`,
})
export class HelloComponent {
  num = interval(1000);
}
