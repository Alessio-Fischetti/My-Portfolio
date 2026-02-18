import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-explorer-content',
  imports: [CommonModule],
  templateUrl: './file-explorer-content.html',
  styleUrl: './file-explorer-content.scss'
})
export class FileExplorerContent {
  /* Variables */
  rotateListArrow: boolean = false;

}
