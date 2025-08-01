import { Component} from '@angular/core';
import { Header } from "../header/header";
import { Particles } from "./particles/particles";
import { AnimatedContent } from "./animated-content/animated-content";

@Component({
  selector: 'home-component',
  imports: [Header, Particles, AnimatedContent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class Home {

}
