import { WindowsApps } from "../components/interfaces/modal-interface";
import { CmdContent } from "../components/pc-version/pc-components/cmd-content/cmd-content";
import { FileExplorerContent } from "../components/pc-version/pc-components/file-explorer-content/file-explorer-content";

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
    search: {
        id: 0,
        isOpen: false,
        isMinimized: false,
        isSelected: false,
        howMany: 0,
        maximazed: false,
        onBackground: false,
        dragPosition: { x: 0, y: 0 },
        lastDragPosition: { x: 0, y: 0 },
        appInfo: { image: '', name: 'Search' }
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
        appInfo: { image: 'assets/icons/cmd.webp', name: 'Prompt di comando' },
        component: CmdContent
    }
};

export const WINDOWS_APPS_CONTENT: Folder[] = [
    {
        folderName: "Desktop",
        isFolderSelected: true,
        folderContent: [
            {
                appName: 'About me.pdf',
                appImg: '',
                appService: ''
            },
            {
                appName: 'Video',
                appImg: '',
                appService: ''
            },
            {
                appName: 'Immagini.pdf',
                appImg: '',
                appService: ''
            },
        ]
    },
    {
        folderName: "Video",
        isFolderSelected: false,
        folderContent: []
    }
]

export const WINDOWS_APP_VIEWS: AppViews[] = [
    { optName: 'Grandi Icone', isOptSeleted: false, img:"assets/icons/big_img_size.webp" },
    { optName: 'Contenuto', isOptSeleted: true, img: 'assets/icons/img_size_list.webp'}
];