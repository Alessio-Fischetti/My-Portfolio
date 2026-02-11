import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-windows-bar',
  imports: [CommonModule],
  templateUrl: './windows-bar.html',
  styleUrl: './windows-bar.scss'
})
export class WindowsBar {
  @Input() windowsApps: any;
  @Output() windowSelected = new EventEmitter<string>();
  /* Variables */
  currentHour: Date = new Date()

  ngOnInit() {
    setInterval(() => {
      this.currentHour = new Date();
    }, 1000);
  }

  selectWindow(appKey: string) {
    this.windowSelected.emit(appKey);
  }
}
