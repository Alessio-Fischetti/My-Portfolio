import { Component, HostListener, OnInit } from '@angular/core';
import { Hamburger } from "./hamburger/hamburger";
import { CommonModule } from '@angular/common';

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

  /* Esegue delle istruzioni all'apertura del componente */
  ngOnInit() {
    this.checkScreenSize();
  }

  /* Recupera la grandezza della pagina */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  /* Verifica che la pagina non sia piu piccola di x */
  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 1028;
  }

  /* Verifica se l'hamburger è o meno aperto */
  handleMenuToggle(isOpen: boolean): void {
    this.isMenuOpen = isOpen;
  }
}
