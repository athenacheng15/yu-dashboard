import type { StaticImageData } from 'next/image';

export interface ISnapshot {
    id: string;
    desc: string;
    imageUrl: StaticImageData;
}

export interface IWebDevToolkit {
    id: string;
    name: string;
    desc: string;
}

export interface IProject {
    tags: string[];
    coverImageUrl: StaticImageData;
    keyFeatures: string[];
    snapshots: ISnapshot[];
    techStacks: string[];
    webDevToolkits: IWebDevToolkit[];
}
