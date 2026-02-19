import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { WindowsApps } from '../components/interfaces/modal-interface';
import { WINDOWS_APPS_MOCK } from '../mocks/windows-app.mock';

@Injectable({ providedIn: 'root' })
export class ModalSevice {
    private modalComponent = new Subject<any>();
    data$ = this.modalComponent.asObservable();
    private windowsApps: WindowsApps = WINDOWS_APPS_MOCK;

    sendData(value: any) {
        const app = this.windowsApps[value.fileType];
        if (app) {
            this.modalComponent.next(app);
        }
    }
}