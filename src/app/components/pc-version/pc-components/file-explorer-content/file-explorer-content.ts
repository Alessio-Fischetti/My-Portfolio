import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WINDOWS_APP_VIEWS, WINDOWS_APPS_CONTENT } from '../../../../mocks/windows-app.mock';

@Component({
  selector: 'app-file-explorer-content',
  imports: [CommonModule],
  templateUrl: './file-explorer-content.html',
  styleUrl: './file-explorer-content.scss'
})
export class FileExplorerContent {
  /* Variables */
  folderSelected: string = 'Desktop'
  listOfPossibleViews: AppViews[] = WINDOWS_APP_VIEWS;
  showSizeOpt: boolean = false;
  showArrow: boolean = false;
  rotateListArrow: boolean = false;
  listApps: Folder[] = WINDOWS_APPS_CONTENT;
  fileSelected: string | undefined;

  ngOnInit() {
    if (sessionStorage.getItem('explorerViewSelected')) {
      this.selectView(sessionStorage.getItem('explorerViewSelected')!)
    }
  }

  /* Seleziona la vıew */
  selectView(viewSelected: string) {
    this.listOfPossibleViews.forEach(v => {

      if (viewSelected === v.optName) {
        v.isOptSeleted = true

        sessionStorage.setItem('explorerViewSelected', viewSelected)
      } else {
        v.isOptSeleted = false;
      }
    })
  }

  /* Recupera la view selezionata */
  contentSelected(fileRequested: string) {
    this.listApps.forEach(app => {

      const file = app.folderContent.find(
        file => file.appName === fileRequested
      );

      if (file) {
        this.fileSelected = file.appName;
      }1
    });
  }

  /* Seleziona la folder */
  selectFolder(selectedFolder: Folder) {
    this.listApps.forEach(folder => {

      if (folder.folderName === selectedFolder.folderName) {
        folder.isFolderSelected = true
        this.folderSelected = folder.folderName;
      } else {
        folder.isFolderSelected = false;
      }
    });

  }
}
