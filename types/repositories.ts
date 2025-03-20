import type { StaticImageData } from 'next/image';
import type { ITechStack } from '@/database/type';

export interface RepoType {
    id: number | string;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    created_at: string;
    updated_at: string;
}

export interface DisplayRepoType {
    id: number | string;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    created_at: string;
    updated_at: string;
    techStacks: ITechStack[];
    coverImageUrl: StaticImageData;
    isWebsiteUnabled?: boolean;
    isConfidential?: boolean;
}

export interface RepoDetailType {
    id: number | string;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    created_at: string;
    updated_at: string;
}

export interface DisplayRepoDetailType {
    id: number | string;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    created_at: string;
    updated_at: string;
    tags: string[];
    isWebsiteUnabled?: boolean;
    isConfidential?: boolean;
}