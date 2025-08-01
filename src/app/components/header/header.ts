import { Component, HostListener, OnInit } from '@angular/core';
import { Hamburger } from "./hamburger/hamburger";
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'header-component',
  imports: [Hamburger, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  /* Variabili */
  isMobileView = false;
  isMenuOpen: boolean = false;
  closeMenu: Subject<boolean> = new Subject();

  /* Esegue delle istruzioni all'apertura del componente */
  ngOnInit() {
    this.checkScreenSize();
  }

  /* Recupera la grandezza della pagina */
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  /* Verifica che la pagina non sia piu piccola di x */
  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 1028;
    if (!this.isMobileView) {
      this.handleMenuToggle(false)
    }
  }

  /* Verifica se l'hamburger è o meno aperto */
  handleMenuToggle(isOpen: boolean): void {
    this.isMenuOpen = isOpen;
  }

  /* Scrolla in cima alla pagina (bottone home) */
  scrollToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* Scrolla in cima alla pagina (bottone home) e chiude la finestra dei link */
  scrollToHomeMobile() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMenu.next(true);
  }
}
