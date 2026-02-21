import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowsApps } from '../components/interfaces/modal-interface';
import { AboutMeContent } from '../components/pc-version/pc-components/modal-content/about-me-content/about-me-content';
import { CmdContent } from '../components/pc-version/pc-components/modal-content/cmd-content/cmd-content';
import { ContactContent } from '../components/pc-version/pc-components/modal-content/contact-content/contact-content';
import { CvContent } from '../components/pc-version/pc-components/modal-content/cv-content/cv-content';
import { FileExplorerContent } from '../components/pc-version/pc-components/modal-content/file-explorer-content/file-explorer-content';
import { ImageContent } from '../components/pc-version/pc-components/modal-content/image-content/image-content';
import { VscodeContent } from '../components/pc-version/pc-components/modal-content/vscode-content/vscode-content';

const ITA_WORDS = {
    searchPlaceholder: 'Cerca..',
    userAvatarAlt: 'User avatar',
    shutdown: 'Spegni',
    cmdAlt: 'cmd',
    projects: 'Progetti',
    openInGithub: 'Apri in Github',
    file: "File",
    print: "Stampa",
    email: "Email",
    open: "Apri",
    imageNotFound: "Immagine non trovata",
    organize: "Organizza",
    size: "Dimensione",
    favourites: "Favoriti",
    emptyFolder: "Questa cartella è vuota",
    contentView: "Contenuto",
    largeIcons: "Grandi Icone",
    downloading: "Download in corso...",
    download: "Download",
    reference: "Reference",
    softwareDeveloper: "Software Developer",
    aboutMe: "Creo applicazioni web scalabili, performanti e di qualità, lavorando su frontend, backend e soluzioni AI con passione.",
    mainContacts: "Contatti Principali",
    copy: "Copia",
    findMe: "Mi Trovi"
};

const ENG_WORDS = {
    searchPlaceholder: 'Search..',
    userAvatarAlt: 'User avatar',
    shutdown: 'P.Off',
    cmdAlt: 'cmd',
    projects: 'Projects',
    openInGithub: 'Open in Github',
    file: "File",
    print: "Print",
    email: "Email",
    open: "Open",
    imageNotFound: "Image Not Found",
    organize: "Organize",
    size: "Size",
    favourites: "Favourites",
    emptyFolder: "This folder is empty",
    contentView: "Content",
    largeIcons: "Large Icons",
    downloading: "Downloading...",
    download: "Download",
    reference: "Reference",
    softwareDeveloper: "Software Developer",
    aboutMe: "I create scalable, high-performance, quality web applications working on frontend, backend, and AI solutions with passion.",
    mainContacts: "Main Contacts",
    copy: "Copy",
    findMe: "Find Me"
};

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private languageSubject = new BehaviorSubject<'ITA' | 'ENG'>(
        (localStorage.getItem('languageSetted') as 'ITA' | 'ENG') || 'ENG'
    );

    language$ = this.languageSubject.asObservable();

    get words() {
        return this.languageSubject.value === 'ENG' ? ENG_WORDS : ITA_WORDS;
    }

    setLanguage(lang: 'ITA' | 'ENG') {
        localStorage.setItem('languageSetted', lang);
        this.languageSubject.next(lang);
    }
}