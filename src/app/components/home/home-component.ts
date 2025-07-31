import { Component} from '@angular/core';
import { Header } from "../header/header";
import { Particles } from "./particles/particles";
import { AnimatedText } from './animated-text/animated-text';

@Component({
  selector: 'home-component',
  imports: [Header, Particles, AnimatedText],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class Home {

}
