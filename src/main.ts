import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about {{ name }}
    </a>
    <div>
    <input #box (keyup)="onEnter(box.value)" [attr.value]="name">
    <p>{{name}}</p>
    </div>
    
   <button (click)="count = count + 1">+</button> {{ count }} <button (click)="count = count - 1">-</button>
  `,
})
export class App {
  name = 'Angular17';
  count = 0;
  onEnter(name: string) {
    this.name = name;
  }
}

bootstrapApplication(App);
