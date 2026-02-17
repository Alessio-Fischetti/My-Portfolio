import { Component } from '@angular/core';
import { WindowsBar } from './pc-components/windows-bar/windows-bar';
import { CommonModule } from '@angular/common';
import { OpenAppModal } from "./pc-components/open-app-modal/open-app-modal";
import { WindowsApps, WindowState } from '../interfaces/modal-interface';
import { WINDOWS_APPS_MOCK } from '../../mocks/windows-app.mock';

@Component({
  selector: 'app-pc-version',
  imports: [CommonModule, WindowsBar, OpenAppModal],
  templateUrl: './pc-version.html',
  styleUrl: './pc-version.scss'
})
export class PcVersion {

  /* Variables */
  windowsApps: WindowsApps = WINDOWS_APPS_MOCK;
  openedWindows: { appName: string, appId: number }[] = [
    { appName: 'cmd', appId: 1 }
  ];
  windowSelected: string | undefined;
  idToGive: any = {
    windows_icon: 0,
    search: 0,
    file_explorer: 0,
    cmd: 1,
  }
  highestZIndex = 1

  /* Gestione finestra aperta */
  selectWindow(appKey: string) {
    Object.keys(this.windowsApps).forEach(key => {

      const app = this.windowsApps[key];
      if (key === appKey) {

        /* Se aperta → minimizza */
        if (app.id != 0 && !app.isMinimized) {
          app.isOpen = false;
          app.isSelected = false;
          app.isMinimized = true;
          console.log('mın');

          this.minimizeSelectedWindow(app, appKey);

          /* Se minimizzata → riapri */
        } else if (app.id !== 0 && app.isMinimized) {
          app.isOpen = true;
          app.isSelected = true;
          app.isMinimized = false;
          console.log('aprı', appKey, app);
          this.openMinimizzedWindow(app, appKey);

          /* Se non esiste → creane una nuova */
        } else if (app.id === 0 && !app.isMinimized) {
          app.isOpen = true;
          app.isSelected = true;
          app.onBackground = true;
          app.isMinimized = false;

          this.idToGive[key] = this.idToGive[key] + 1;
          app.id = this.idToGive[key];

          this.openSelectedWindow(app, appKey);
        }

      } else {
        // tutte le altre si deselezionano
        app.isSelected = false;
      }

    });

  }

  /* Salva la posizione della modale */
  saveDragHandle(appValue: { appKey: string | undefined; appId: number | undefined; dragPosition?: { x: number, y: number } }) {
    const app = this.windowsApps[appValue.appKey!];
    if (!app) return;
    console.log(appValue.dragPosition);

    if (appValue.dragPosition) {
      app.dragPosition = { ...appValue.dragPosition };
    }
  }

  /* Gestione apertura */
  openSelectedWindow(app: WindowState, appKey: string) {
    this.openedWindows.push({
      appName: appKey,
      appId: app.id!
    });
  }

  /* Gestione minimizzazione */
  minimizeSelectedWindow(app: WindowState, appKey: string) {
    if (!app.maximazed) {
      app.lastDragPosition = app.dragPosition
    }
    this.openedWindows = this.openedWindows.filter(
      win => !(win.appName === appKey && win.appId === app.id)
    );
  }

  /* Apre dal minimizzato */
  openMinimizzedWindow(app: WindowState, appKey: string) {
    const exists = this.openedWindows.some(
      win => win.appName === appKey && win.appId === app.id
    );

    if (!exists) {
      this.openedWindows.push({ appName: appKey, appId: app.id! });
    }
  }

  /* Modifica index e aggiusta la windows bar per la selezione app aperta  */
  bringToFront(appKey: any) {
    Object.keys(this.windowsApps).forEach(key => {

      const app = this.windowsApps[key];
      if (key === appKey) {
        this.highestZIndex++;
        app.zIndex = this.highestZIndex;
      }
    })
  }


  /* Gestione chiusura */
  closeModal(appValue: { appKey: string | undefined, appId: number | undefined }) {
    const app = this.windowsApps[appValue.appKey!];
    if (!app) return;

    app.id = 0;
    app.isOpen = false;
    app.isSelected = false;
    app.isMinimized = false;
    app.onBackground = false;


    this.openedWindows = this.openedWindows.filter(
      win => !(win.appName === appValue.appKey && win.appId === appValue.appId)
    );
  }
}
