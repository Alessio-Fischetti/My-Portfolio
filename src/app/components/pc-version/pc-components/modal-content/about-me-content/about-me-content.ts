import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { downloadCVService } from '../../../../../service/download-cv-service';

@Component({
  selector: 'about-me-content',
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './about-me-content.html',
  styleUrl: './about-me-content.scss'
})
export class AboutMeContent {
  /* Variables */
  @ViewChild('aboutMeView') aboutMeView!: ElementRef<HTMLDivElement>;

  componentSub!: Subscription;
  fileToOpen!: { fileLink: string, maximized: boolean };
  downloading: boolean = false;

  constructor(private modalService: ModalSevice, private downloadCvService: downloadCVService) { }

  ngOnInit() {
    this.componentSub = this.modalService.componentAboutMeData$
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

    this.downloadCvService.downloadAboutMe();

    setTimeout(() => {
      this.downloading = false;
    }, 1000);
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }

}

