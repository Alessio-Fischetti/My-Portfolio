import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { downloadCVService } from '../../../../../service/download-cv-service';

@Component({
  selector: 'pdf-content',
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './pdf-content.html',
  styleUrl: './pdf-content.scss'
})
export class PdfContent {
  /* Variables */
  @ViewChild('pdfContainer') pdfContainer!: ElementRef<HTMLDivElement>;
  componentSub!: Subscription;
  fileToOpen!: { fileLink: string, maximized: boolean };
  downloading: boolean = false;

  constructor(private modalService: ModalSevice, private downloadCvService: downloadCVService) { }

  ngOnInit() {
    this.componentSub = this.modalService.componentData$
      .subscribe(value => {
        if (!value) return;
        this.fileToOpen = { fileLink: value.file, maximized: value.maximized! };
      });
  }

  downloadFile() {

    if (this.downloading) {
      return;
    }

    this.downloading = true;

    this.downloadCvService.downloadCV();

    setTimeout(() => {
      this.downloading = false;
    }, 1000);
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }

}
