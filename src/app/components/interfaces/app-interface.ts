import { Type } from "@angular/core";

export interface AppItem {
    appName: string;
    appImg: string;
    component?: Type<any>,
    referenceFolder: string,
    fileType: string
}

export interface Folder {
    folderName: string;
    isFolderSelected: boolean;
    folderImg: string;
    folderContent: AppItem[];
}

export interface AppViews {
    optName: string,
    isOptSeleted: boolean,
    img: string
}

export interface StartApp {
    appName: string,
    appImg: string,
    fileType: string,
    open: boolean
}