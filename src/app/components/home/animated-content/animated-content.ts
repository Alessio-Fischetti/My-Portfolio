import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { downloadCVService } from '../../../service/download-cv';

@Component({
  selector: 'animated-content-component',
  imports: [],
  templateUrl: './animated-content.html',
  styleUrl: './animated-content.scss'
})
export class AnimatedContent implements AfterViewInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  constructor(private downloadCVService: downloadCVService) {}

  /* Lyficle dell'AfterViewInit */
  ngAfterViewInit(): void {
    const options = {
      strings: ['Ciao, piacere di conoscerti!', 'Benvenuto nel mio portfolio!', 'Sono Alessio Fischetti', 'Developer di Siti e Applicazioni Web'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false
    };
    new Typed(this.typedElement.nativeElement, options);
  }

  /* Scarica il file PDF */
  downloadCV(): void {
    this.downloadCVService.downloadCV()
  }
}
