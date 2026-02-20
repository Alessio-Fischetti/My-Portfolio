import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';

@Component({
  selector: 'app-vscode-content',
  imports: [CommonModule],
  templateUrl: './vscode-content.html',
  styleUrl: './vscode-content.scss'
})
export class VscodeContent {
/* Variables */
  componentSub!: Subscription;
  fileToOpen!: string;

  constructor(private modalService: ModalSevice) { }

  ngOnInit() {
    this.componentSub = this.modalService.componentData$
      .subscribe(value => {
        if (!value) return;
        this.fileToOpen = value.file;
      });
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }
}
