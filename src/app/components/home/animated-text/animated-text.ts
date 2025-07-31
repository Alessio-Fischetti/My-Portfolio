import { Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'animated-text-component',
  imports: [],
  templateUrl: './animated-text.html',
  styleUrl: './animated-text.scss'
})
export class AnimatedText {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngAfterViewInit(): void {
    const options = {
      strings: ['Ciao, piacere di conoscerti!', 'Benvenuto nel mio portfolio!', 'Sono Alessio Fischetti', 'Frontend Developer di Siti e Applicazioni Web'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    };

    new Typed(this.typedElement.nativeElement, options);
  }
}
