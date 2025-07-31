import { AfterViewInit, Component } from '@angular/core';
import particlesConfig from '../../../../assets/particlesjs-config.json';

declare var particlesJS: any;

@Component({
  selector: 'particles-component',
  imports: [],
  templateUrl: './particles.html',
  styleUrl: './particles.scss'
})
export class Particles implements AfterViewInit {


  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })


  ngAfterViewInit(): void {
    particlesJS('particles-js', particlesConfig);
  }
}
