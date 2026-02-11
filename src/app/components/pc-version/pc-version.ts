import { Component } from '@angular/core';
import { WindowsBar } from './pc-components/windows-bar/windows-bar';
import { CommonModule } from '@angular/common';
import { OpenAppModal } from "./pc-components/open-app-modal/open-app-modal";

@Component({
  selector: 'app-pc-version',
  imports: [CommonModule, WindowsBar, OpenAppModal],
  templateUrl: './pc-version.html',
  styleUrl: './pc-version.scss'
})
export class PcVersion {

  /* Variables */
  windowsApps: any = {
    windows_icon: { isOpen: false, isSelected: false, howMany: 0, onBackground: false },
    search: { isOpen: false, isSelected: false, howMany: 0, onBackground: false },
    file_explorer: { isOpen: false, isSelected: false, howMany: 0, onBackground: false },
    cmd: { isOpen: true, isSelected: true, howMany: 2, onBackground: true },
  }

  /* Gestione finestra aperta */
  selectWindow(appKey: string) {
    Object.keys(this.windowsApps).forEach(key => {
      if (key === appKey) {
        const app = this.windowsApps[key];

        // toggle: se è già attiva, chiudi
        if (app.isOpen && app.isSelected) {
          app.isOpen = false;
          app.isSelected = false;
        } else {
          app.isOpen = true;
          app.isSelected = true;
          app.onBackground = true
        }
      } else {
        // tutte le altre si deselezionano
        this.windowsApps[key].isSelected = false;
      }
    });
  }
}
