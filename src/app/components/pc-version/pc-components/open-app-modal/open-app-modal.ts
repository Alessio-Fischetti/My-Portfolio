import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CdkDrag, CdkDragEnd, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { WindowState } from '../../../interfaces/modal-interface';

@Component({
  selector: 'open-app-modal',
  imports: [CdkDrag, CdkDragHandle, CommonModule],
  templateUrl: './open-app-modal.html',
  styleUrl: './open-app-modal.scss'
})
export class OpenAppModal {
  /* Variables */
  @Input() selectedApp: WindowState | undefined
  @Input() appKey: string | undefined
  @Output() app = new EventEmitter<{ appKey: string | undefined; appId: number | undefined }>();
  @Output() saveDragPosition = new EventEmitter<{ appKey: string | undefined; appId: number | undefined; dragPosition?: { x: number, y: number } }>();

  dragPosition!: { x: number, y: number }

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.selectedApp!.isSelected = false
    }
  }

  ngOnInit() {
    if (!this.selectedApp?.maximazed) {
      this.dragPosition = this.selectedApp!.lastDragPosition
    }
  }

  /* Gestione chiusura */
  minimizeWindow() {
    if (!this.selectedApp) return;
    this.selectedApp.isMinimized = true;
  }

  /* Ingrandisce la modale 
    salva la grandezza e l ultima posizione della modale
  */
  increaseSizeByMax() {
    if (!this.selectedApp?.maximazed) {
      this.selectedApp!.lastXSize = this.selectedApp!.xSize;
      this.selectedApp!.lastYSize = this.selectedApp!.ySize;

      this.selectedApp!.xSize = '100%';
      this.selectedApp!.ySize = '100%';

      this.selectedApp!.lastDragPosition = this.dragPosition;
      this.dragPosition = { x: 0, y: 0 };
      this.selectedApp!.maximazed = true

    } else {
      this.selectedApp!.xSize = this.selectedApp!.lastXSize
      this.selectedApp!.ySize = this.selectedApp!.lastYSize

      this.dragPosition = this.selectedApp!.lastDragPosition
      this.selectedApp!.maximazed = false
    }

  }
  /* Recupera posizione */
  onDragEnded(event: CdkDragEnd) {
    this.dragPosition = { ...event.source.getFreeDragPosition() };
    this.selectedApp!.dragPosition = this.dragPosition;

    if (!this.selectedApp) return;
    this.selectedApp.dragPosition = { ...event.source.getFreeDragPosition() };

    this.saveDragPosition.emit({
      appKey: this.appKey,
      appId: this.selectedApp.id,
      dragPosition: this.selectedApp.dragPosition
    });
  }

  /* Chiude modale */
  closeModal() {
    this.app.emit({ appKey: this.appKey, appId: this.selectedApp?.id })
  }
}
