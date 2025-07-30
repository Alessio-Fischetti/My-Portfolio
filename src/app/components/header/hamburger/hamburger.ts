import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hamburger-component',
  imports: [],
  templateUrl: './hamburger.html',
  styleUrl: './hamburger.scss'
})
export class Hamburger {
  @Output() menuToggle = new EventEmitter<boolean>();

  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.menuToggle.emit(this.menuOpen);
  }

}
