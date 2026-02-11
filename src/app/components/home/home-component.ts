import { Component, HostListener } from '@angular/core';
import { PcVersion } from '../pc-version/pc-version';
import { PhoneVersion } from '../phone-version/phone-version';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'home-component',
  imports: [CommonModule, PcVersion, PhoneVersion],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class Home {
  /* Variabili */
  isMobileView = false;

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
  }
}
