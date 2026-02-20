import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';

@Component({
  selector: 'app-vscode-content',
  imports: [CommonModule],
  templateUrl: './vscode-content.html',
  styleUrl: './vscode-content.scss'
})
export class VscodeContent {
  /* Variables */
  componentSub!: Subscription;
  fileToOpen!: string;
  rotateListArrow: boolean = true;
  listaProgetti: { nomeProgetto: string, readMe: string, selectedProject: boolean }[] = [
    {
      nomeProgetto: 'AI Implementation',
      readMe: '',
      selectedProject: false,
    }
  ];
  listOpenedProjects: { nomeProgetto: string, readMe: string, selectedProject: boolean }[] = [];

  constructor(private modalService: ModalSevice) { }

  ngOnInit() {
    this.componentSub = this.modalService.componentCvData$
      .subscribe(value => {
        if (!value) return;
        this.fileToOpen = value.file;
      });
  }

  selectedProject(project: { nomeProgetto: string, readMe: string, selectedProject: boolean }) {

    this.listaProgetti.forEach(p => p.selectedProject = false);
    project.selectedProject = true;

    this.listOpenedProjects.push(project);

  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }
}
