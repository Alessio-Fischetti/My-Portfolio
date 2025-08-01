import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'hamburger-component',
  imports: [],
  templateUrl: './hamburger.html',
  styleUrl: './hamburger.scss'
})
export class Hamburger implements OnInit {
  
  /* Passaggio dati padre-figlio o viceversa */
  @Input() usedLink!: Subject<boolean>;
  @Output() menuToggle = new EventEmitter<boolean>();

  /* Variabile apertura menu */
  menuOpen: boolean = false;

  /* Lyficle onInit */
  ngOnInit(): void {
    this.usedLink.subscribe(value => {
      value == true ? this.menuOpen = !this.menuOpen : undefined
      this.menuToggle.emit(this.menuOpen);
    });
  }

  /* Chiude o apre il menu */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.menuToggle.emit(this.menuOpen);
  }

}
