import { WindowsApps } from "../components/interfaces/modal-interface";
import { Folder, AppViews } from "../components/interfaces/app-interface";
import { CmdContent } from "../components/pc-version/pc-components/cmd-content/cmd-content";
import { FileExplorerContent } from "../components/pc-version/pc-components/file-explorer-content/file-explorer-content";
import { PdfContent } from "../components/pc-version/pc-components/pdf-content/pdf-content";

export const WINDOWS_APPS_MOCK: WindowsApps = {
    windows_icon: {
        id: 0,
        isOpen: false,
        isMinimized: false,
        isSelected: false,
        howMany: 0,
        maximazed: false,
        onBackground: false,
        dragPosition: { x: 0, y: 0 },
        lastDragPosition: { x: 0, y: 0 },
        appInfo: { image: '', name: 'Start' }
    },
    cmd: {
        id: 1,
        isOpen: true,
        isMinimized: false,
        isSelected: true,
        howMany: 2,
        maximazed: false,
        onBackground: true,
        dragPosition: { x: 694, y: 137 },
        lastDragPosition: { x: 694, y: 137 },
        xSize: '25%',
        lastXSize: '25%',
        ySize: '45%',
        lastYSize: '45%',
        zIndex: 0,
        appInfo: { image: 'assets/icons/cmd.webp', name: 'Software Developer Portfolio' },
        component: CmdContent
    },
    file_explorer: {
        id: 0,
        isOpen: false,
        isMinimized: false,
        isSelected: false,
        howMany: 0,
        maximazed: false,
        onBackground: false,
        dragPosition: { x: 50, y: 50 },
        lastDragPosition: { x: 50, y: 50 },
        xSize: '50%',
        lastXSize: '50%',
        ySize: '50%',
        lastYSize: '50%',
        appInfo: { image: 'assets/icons/File_Explorer.svg', name: 'File Explorer' },
        component: FileExplorerContent
    },
    about_me: {
        id: 0,
        isOpen: false,
        isMinimized: false,
        isSelected: false,
        howMany: 0,
        maximazed: false,
        onBackground: false,
        dragPosition: { x: 50, y: 50 },
        lastDragPosition: { x: 50, y: 50 },
        xSize: '50%',
        lastXSize: '50%',
        ySize: '50%',
        lastYSize: '50%',
        appInfo: { image: 'assets/icons/pdf.svg', name: 'about_me', modalTitle: 'About me.pdf' },
        component: PdfContent
    },
    cv: {
        id: 0,
        isOpen: false,
        isMinimized: false,
        isSelected: false,
        howMany: 0,
        maximazed: false,
        onBackground: false,
        dragPosition: { x: 50, y: 50 },
        lastDragPosition: { x: 50, y: 50 },
        xSize: '50%',
        lastXSize: '50%',
        ySize: '50%',
        lastYSize: '50%',
        appInfo: { image: 'assets/icons/cv.png', name: 'cv', modalTitle: 'Cv Alessio Fischetti.pdf' },
        component: PdfContent
    },
    /*     vscode: {
            id: 0,
            isOpen: false,
            isMinimized: false,
            isSelected: false,
            howMany: 0,
            maximazed: false,
            onBackground: false,
            dragPosition: { x: 50, y: 50 },
            lastDragPosition: { x: 50, y: 50 },
            xSize: '50%',
            lastXSize: '50%',
            ySize: '50%',
            lastYSize: '50%',
            appInfo: { image: 'assets/icons/vscode.svg', name: 'VS Code' },
            component: FileExplorerContent
        },
        contact_me: {
            id: 0,
            isOpen: false,
            isMinimized: false,
            isSelected: false,
            howMany: 0,
            maximazed: false,
            onBackground: false,
            dragPosition: { x: 50, y: 50 },
            lastDragPosition: { x: 50, y: 50 },
            xSize: '50%',
            lastXSize: '50%',
            ySize: '50%',
            lastYSize: '50%',
            appInfo: { image: 'assets/icons/contact.svg', name: 'Contattami' },
            component: FileExplorerContent
        },
        images: {
            id: 0,
            isOpen: false,
            isMinimized: false,
            isSelected: false,
            howMany: 0,
            maximazed: false,
            onBackground: false,
            dragPosition: { x: 50, y: 50 },
            lastDragPosition: { x: 50, y: 50 },
            xSize: '50%',
            lastXSize: '50%',
            ySize: '50%',
            lastYSize: '50%',
            appInfo: { image: 'assets/img/me.svg', name: 'İmmagini' },
            component: FileExplorerContent
        }, */

};

export const WINDOWS_APPS_CONTENT: Folder[] = [
    {
        folderName: "Desktop",
        isFolderSelected: true,
        folderImg: 'assets/icons/desktop.webp',
        folderContent: [
            {
                appName: 'About me.pdf',
                appImg: 'assets/icons/pdf.svg',
                referenceFolder: 'Desktop',
                fileType: 'about_me',
                component: PdfContent
            },
            {
                appName: 'CV Alessio Fischetti.pdf',
                appImg: 'assets/icons/cv.png',
                referenceFolder: 'Desktop',
                component: PdfContent,
                fileType: "cv"
            },
            {
                appName: 'Progetti',
                appImg: 'assets/icons/vscode.svg',
                referenceFolder: 'Desktop',
                component: FileExplorerContent,
                fileType: "vscode"
            },
            {
                appName: 'Contattami',
                appImg: 'assets/icons/contact.png',
                referenceFolder: 'Desktop',
                fileType: "contact_me"
            },
            {
                appName: 'About me.png',
                appImg: 'assets/imgs/me.png',
                referenceFolder: 'Desktop',
                fileType: "images"
            },

        ]
    },
    {
        folderName: "Documenti",
        isFolderSelected: false,
        folderImg: 'assets/icons/documents_folder.webp',
        folderContent: [
            {
                appName: 'About me.pdf',
                appImg: 'assets/icons/pdf.svg',
                referenceFolder: 'Documenti',
                component: PdfContent,
                fileType: "about_me"
            },
            {
                appName: 'CV Alessio Fischetti.pdf',
                appImg: 'assets/icons/cv.png',
                referenceFolder: 'Documenti',
                component: PdfContent,
                fileType: "cv"
            },
        ]
    },
    {
        folderName: "Download",
        isFolderSelected: false,
        folderImg: 'assets/icons/download.webp',
        folderContent: [
            {
                appName: 'CV Alessio Fischetti.pdf',
                appImg: 'assets/icons/pdf.svg',
                referenceFolder: 'Download',
                fileType: "cv"
            }
        ]
    },
    {
        folderName: "Immagini",
        isFolderSelected: false,
        folderImg: 'assets/icons/images.webp',
        folderContent: [
            {
                appName: 'About me.png',
                appImg: 'assets/imgs/me.png',
                referenceFolder: 'Immagini',
                fileType: "images"
            },
        ]
    },
    {
        folderName: "Contatti",
        isFolderSelected: false,
        folderImg: 'assets/icons/contact.png',
        folderContent: [
            {
                appName: 'Contattami',
                appImg: 'assets/icons/contact.png',
                referenceFolder: 'Contatti',
                fileType: "contact_me"
            },
        ]
    }
]

export const WINDOWS_APP_VIEWS: AppViews[] = [
    { optName: 'Grandi Icone', isOptSeleted: false, img: "assets/icons/big_img_size.webp" },
    { optName: 'Contenuto', isOptSeleted: true, img: 'assets/icons/img_size_list.webp' }
];