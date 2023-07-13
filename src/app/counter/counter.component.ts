import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class CounterComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  isDecrementDisabled() {
    return this.counter === 0;
  }
}
