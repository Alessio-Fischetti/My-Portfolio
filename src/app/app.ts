import { Component, signal } from '@angular/core';
import { Home } from "./components/home/home-component";

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('software-developer-portfolio');
}
