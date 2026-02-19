import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../service/modal-service';

@Component({
  selector: 'app-windows-bar',
  imports: [CommonModule],
  templateUrl: './windows-bar.html',
  styleUrl: './windows-bar.scss'
})
export class WindowsBar {
  @Input() windowsApps: any;
  @Input() newApps: any[] = []
  @Output() windowSelected = new EventEmitter<string>();
  /* Variables */
  currentHour: Date = new Date()
  shrinkRightCorner!: number;
  linkApps: { linkName: string, linkImg: string }[] = [
    { linkName: 'linkedin', linkImg: 'assets/icons/linkedin.svg' },
    { linkName: 'GitHub', linkImg: 'assets/icons/github.svg' },
    { linkName: 'Medium', linkImg: 'assets/icons/medium.svg' },
    { linkName: 'Gmail', linkImg: 'assets/icons/gmail.svg' },
  ];
  showHiddenLinks = false;
  /* Update link visibili o meno */
  get visibleLinks() {
    if (this.shrinkRightCorner < 800) {
      return this.linkApps.slice(0, 2);
    }
    return this.linkApps;
  }
  modalSub!: Subscription;


  constructor(private modalService: ModalSevice) { }

  get hiddenLinks() {
    if (this.shrinkRightCorner < 800) {
      return this.linkApps.slice(2);
    }
    return [];
  }

  ngOnInit() {
    setInterval(() => {
      this.currentHour = new Date();
    }, 1000);

    this.modalSub = this.modalService.data$.subscribe(value => {

      this.openInternalModal(value)
    });

    this.checkScreenSize();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newApps']) {
      console.log(this.newApps);
    }
  }

  /* Recupera la grandezza della pagina */
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  /* Verifica che la pagina non sia piu piccola di x */
  checkScreenSize() {
    this.shrinkRightCorner = window.innerWidth;
  }

  selectWindow(appKey?: string) {
    this.windowSelected.emit(appKey);
  }

  toggleHiddenLinks() {
    this.showHiddenLinks = !this.showHiddenLinks;
  }

  openInternalModal(value: any) {
    const exists = this.newApps.some(app => app.appInfo.name === value.appInfo.name);
    
    if (!exists) {
      this.selectWindow(value.appInfo.name)
    }
  }

  ngOnDestroy() {
    this.modalSub.unsubscribe();
  }
}
