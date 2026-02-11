import { Component } from '@angular/core';
import { CdkDrag, CdkDragEnd, CdkDragHandle } from '@angular/cdk/drag-drop';


@Component({
  selector: 'open-app-modal',
  imports: [CdkDrag, CdkDragHandle,],
  templateUrl: './open-app-modal.html',
  styleUrl: './open-app-modal.scss'
})
export class OpenAppModal {

}
