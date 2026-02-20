import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';

@Component({
  selector: 'image-content',
  imports: [CommonModule],
  templateUrl: './image-content.html',
  styleUrl: './image-content.scss'
})
export class ImageContent {
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
