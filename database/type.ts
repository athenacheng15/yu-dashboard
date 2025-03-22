import type { StaticImageData } from 'next/image';

export interface ISnapshot {
    id: string;
    desc: string;
    imageUrl: StaticImageData;
}
export interface ITechStack {
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
    isWebsiteUnabled?: boolean;
    isConfidential?: boolean;
    keyFeatures: { title: string; desc: string }[];
    snapshots: ISnapshot[];
    techStacks: ITechStack[];
    webDevToolkits: IWebDevToolkit[];
}
