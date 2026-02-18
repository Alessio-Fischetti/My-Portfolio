interface AppItem {
    appName: string;
    appImg: string;
    appService: string;
}

interface Folder {
    folderName: string;
    isFolderSelected: boolean;
    folderImg: string;
    folderContent: AppItem[];
}

interface AppViews {
    optName: string,
    isOptSeleted: boolean,
    img: string
}