import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSevice } from '../../../../../service/modal-service';
import { MarkdownModule } from 'ngx-markdown';


@Component({
  selector: 'app-vscode-content',
  imports: [CommonModule, MarkdownModule],
  templateUrl: './vscode-content.html',
  standalone: true,
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
      readMe: 'assets/projects-readme/AI_Implementation.md',
      selectedProject: false,
    },
    {
      nomeProgetto: 'Gestionale x',
      readMe: 'BASIC SHIT',
      selectedProject: false,
    },
  ];
  listOpenedProjects: { nomeProgetto: string, readMe: string, selectedProject: boolean }[] = [];
  selectedWindow!: string;

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

    // evita duplicati nella lista delle finestre aperte
    const exists = this.listOpenedProjects.find(p => p.nomeProgetto === project.nomeProgetto);
    if (!exists) {
      this.listOpenedProjects.push(project);
      this.selectedProjectWindow(project);
    }
  }

  selectedProjectWindow(project: { nomeProgetto: string, readMe: string, selectedProject: boolean }) {
    this.selectedWindow = project.nomeProgetto;
  }

  closeWindow(project: { nomeProgetto: string, readMe: string, selectedProject: boolean }) {
    project.selectedProject = false;
    this.listOpenedProjects = this.listOpenedProjects.filter(p => p.nomeProgetto !== project.nomeProgetto);

    if (this.selectedWindow === project.nomeProgetto) {
      this.selectedWindow = this.listOpenedProjects.length
        ? this.listOpenedProjects[this.listOpenedProjects.length - 1].nomeProgetto
        : '';
    }
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }
}
