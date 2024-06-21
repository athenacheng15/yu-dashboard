import type { StaticImageData } from 'next/image';
export interface RepoType {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    created_at: string;
    updated_at: string;
}

export interface DisplayRepoType {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    created_at: string;
    updated_at: string;
    tags: string[];
    coverImageUrl: StaticImageData;
    isWebsiteUnabled?: boolean;
}

export interface RepoDetailType {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    created_at: string;
    updated_at: string;
}

export interface DisplayRepoDetailType {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    created_at: string;
    updated_at: string;
    tags: string[];
    isWebsiteUnabled?: boolean;
}