import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';

@Component({
  selector: 'pdf-content',
  imports: [CommonModule],
  templateUrl: './pdf-content.html',
  styleUrl: './pdf-content.scss'
})
export class PdfContent {
  /* Variables */
  componentSub!: Subscription;
  pdfFileToOpen!: string;

  constructor(private modalService: ModalSevice) { }

  ngOnInit() {
    this.componentSub = this.modalService.componentData$
      .subscribe(value => {
        if (!value) return;
        this.pdfFileToOpen = value.file;
      });
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }

}
