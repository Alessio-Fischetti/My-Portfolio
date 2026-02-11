import { Component, Input } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import AppModalInterface from '../../../interfaces/modal-interface';


@Component({
  selector: 'open-app-modal',
  imports: [CdkDrag, CdkDragHandle,],
  templateUrl: './open-app-modal.html',
  styleUrl: './open-app-modal.scss'
})
export class OpenAppModal {
  /* Variables */
  @Input() app: AppModalInterface | undefined
}
