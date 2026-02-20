import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { WindowsApps, WindowState } from '../components/interfaces/modal-interface';
import { WINDOWS_APPS_MOCK } from '../mocks/windows-app.mock';
import { AppItem } from '../components/interfaces/app-interface';

@Injectable({ providedIn: 'root' })
export class ModalSevice {
    /* Sub per passare il componente della modale */
    private modalComponent = new Subject<WindowState>();
    modalData$ = this.modalComponent.asObservable();
    private windowsApps: WindowsApps = WINDOWS_APPS_MOCK;

    sendModalData(value: AppItem) {
        const app = this.windowsApps[value.fileType];
        if (app) {
            this.modalComponent.next(app);
        }
    }

    /* Sub per passare quali file aprire nel componente della modale */
    private componentDetais = new BehaviorSubject<{ name: string; file: string } | null>(null);
    componentData$ = this.componentDetais.asObservable();

    sendComponentData(value: AppItem) {

        const app = { name: this.windowsApps[value.fileType].appInfo.name, file: this.windowsApps[value.fileType].appInfo.file };

        if (app) {
            this.componentDetais.next(app);
        }
    }
}