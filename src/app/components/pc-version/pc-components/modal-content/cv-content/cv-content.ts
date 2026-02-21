import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { downloadCVService } from '../../../../../service/download-cv-service';
import { LanguageService } from '../../../../../service/language-service';

@Component({
  selector: 'cv-content',
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './cv-content.html',
  styleUrl: './cv-content.scss'
})
export class CvContent {
  language: any;
  /* Variables */
  @ViewChild('cvView') cvView!: ElementRef<HTMLDivElement>;
  componentSub!: Subscription;
  fileToOpen!: { fileLink: string, maximized: boolean };
  downloading: boolean = false;

  constructor(private modalService: ModalSevice, private downloadCvService: downloadCVService, private langService: LanguageService) { }

  ngOnInit() {
    this.componentSub = this.modalService.componentCvData$
      .subscribe(value => {
        if (!value) return;
        this.fileToOpen = { fileLink: value.file, maximized: value.maximized! };
      });
    this.langService.language$.subscribe(() => {
      this.language = this.langService.words;
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
