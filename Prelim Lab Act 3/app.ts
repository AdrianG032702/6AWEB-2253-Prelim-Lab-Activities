import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { Directives } from './directives/directives';
// import { Home } from './home/home';
// import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prelim_lab_activity');
}
//Home, DataBinding, Directives, RouterLinkActive]
