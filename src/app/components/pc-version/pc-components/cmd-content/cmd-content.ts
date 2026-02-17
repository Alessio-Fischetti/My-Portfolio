import { Component } from '@angular/core';

@Component({
  selector: 'app-cmd-content',
  imports: [],
  standalone: true,
  templateUrl: './cmd-content.html',
  styleUrl: './cmd-content.scss'
})
export class CmdContent {
  text: string = `user: {
    name: 'Alessio',
    surname: 'Fischetti',
    username: 'afischetti.work@gmail.com',
    }`

}
