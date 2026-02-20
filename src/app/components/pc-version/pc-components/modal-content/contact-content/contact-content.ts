import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';


@Component({
  selector: 'app-contact-content',
  imports: [CommonModule],
  templateUrl: './contact-content.html',
  styleUrl: './contact-content.scss'
})
export class ContactContent {
  /* Variables */
  componentSub!: Subscription;
  fileToOpen!: string;

  constructor(private modalService: ModalSevice) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }
}
