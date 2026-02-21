import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';
import { LanguageService } from '../../../../../service/language-service';

@Component({
  selector: 'image-content',
  imports: [CommonModule],
  templateUrl: './image-content.html',
  styleUrl: './image-content.scss'
})
export class ImageContent {
  language: any;
  /* Variables */
  componentSub!: Subscription;
  fileToOpen: string = 'assets/imgs/me.webp';

  constructor(private modalService: ModalSevice, private langService: LanguageService) { }

  ngOnInit() {
    this.componentSub = this.modalService.componentImageData$
      .subscribe(value => {

        if (!value) return;
      });
    this.langService.language$.subscribe(() => {
      this.language = this.langService.words;
    });
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }
}
