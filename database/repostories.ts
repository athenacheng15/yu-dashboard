import type { IProject } from './type';

import { airbnbCloneImg, githubIssuesCloneImg, spotifyCloneImg, trelloCloneImg } from './repo-images';

export const repostories: {
    [key: string]: IProject;
} = {
    'airbnb-clone': {
        tags: ['fullStack'],
        coverImageUrl: airbnbCloneImg.img_1,
        keyFeatures: ['desc-1', 'desc-2', 'desc-3', 'desc-4', 'desc-5', 'desc-6', 'desc-7', 'desc-8', 'desc-9'],
        snapshots: [
            { id: 'airbnb-clone-img-1', desc: 'desc-1', imageUrl: airbnbCloneImg.img_1 },
            { id: 'airbnb-clone-img-2', desc: 'desc-2', imageUrl: airbnbCloneImg.img_2 },
            { id: 'airbnb-clone-img-3', desc: 'desc-3', imageUrl: airbnbCloneImg.img_3 },
            { id: 'airbnb-clone-img-4', desc: 'desc-4', imageUrl: airbnbCloneImg.img_4 },
            { id: 'airbnb-clone-img-5', desc: 'desc-5', imageUrl: airbnbCloneImg.img_5 },
            { id: 'airbnb-clone-img-6', desc: 'desc-6', imageUrl: airbnbCloneImg.img_6 },
            { id: 'airbnb-clone-img-7', desc: 'desc-7', imageUrl: airbnbCloneImg.img_7 },
            { id: 'airbnb-clone-img-8', desc: 'desc-8', imageUrl: airbnbCloneImg.img_8 },
            { id: 'airbnb-clone-img-9', desc: 'desc-9', imageUrl: airbnbCloneImg.img_9 },
            { id: 'airbnb-clone-img-10', desc: 'desc-10', imageUrl: airbnbCloneImg.img_10 },
            { id: 'airbnb-clone-img-11', desc: 'desc-11', imageUrl: airbnbCloneImg.img_11 },
            { id: 'airbnb-clone-img-12', desc: 'desc-12', imageUrl: airbnbCloneImg.img_12 },
        ],
        techStacks: ['next-js', 'typescript', 'tailwindcss', 'prisma', 'mongodb'],
        webDevToolkits: [
            { id: 'next-auth-js', name: 'NextAuth.js', desc: 'nextauth-desc' },
            { id: 'cloudinary', name: 'Cloudinary', desc: 'cloudinary-desc' },
            { id: 'zustand', name: 'Zustand', desc: 'zustand-desc' },
        ],
    },
    'trello-clone': {
        tags: ['fullStack'],
        coverImageUrl: trelloCloneImg.img_1,
        keyFeatures: ['desc-1', 'desc-2', 'desc-3', 'desc-4', 'desc-5', 'desc-6', 'desc-7', 'desc-8'],
        snapshots: [
            { id: 'trello-clone-img-1', desc: 'desc-1', imageUrl: trelloCloneImg.img_1 },
            { id: 'trello-clone-img-2', desc: 'desc-2', imageUrl: trelloCloneImg.img_2 },
            { id: 'trello-clone-img-3', desc: 'desc-3', imageUrl: trelloCloneImg.img_3 },
            { id: 'trello-clone-img-4', desc: 'desc-4', imageUrl: trelloCloneImg.img_4 },
            { id: 'trello-clone-img-5', desc: 'desc-5', imageUrl: trelloCloneImg.img_5 },
            { id: 'trello-clone-img-6', desc: 'desc-6', imageUrl: trelloCloneImg.img_6 },
            { id: 'trello-clone-img-7', desc: 'desc-7', imageUrl: trelloCloneImg.img_7 },
            { id: 'trello-clone-img-8', desc: 'desc-8', imageUrl: trelloCloneImg.img_8 },
            { id: 'trello-clone-img-9', desc: 'desc-9', imageUrl: trelloCloneImg.img_9 },
            { id: 'trello-clone-img-10', desc: 'desc-10', imageUrl: trelloCloneImg.img_10 },
            { id: 'trello-clone-img-11', desc: 'desc-11', imageUrl: trelloCloneImg.img_11 },
        ],
        techStacks: ['next-js', 'typescript', 'tailwindcss', 'prisma', 'mysql'],
        webDevToolkits: [
            { id: 'clerk', name: 'Clerk', desc: 'clerk-desc' },
            { id: 'planetscale', name: 'Planetscale', desc: 'planetscale-desc' },
            { id: 'shadcn', name: 'Shadcn', desc: 'shadcn-desc' },
            { id: 'stripe', name: 'Stripe', desc: 'stripe-desc' },
            { id: 'tanstack', name: 'Tanstack', desc: 'tanstack-desc' },
            { id: 'unsplash', name: 'Unsplash', desc: 'unsplash-desc' },
            { id: 'zod', name: 'Zod', desc: 'zod-desc' },
            { id: 'zustand', name: 'Zustand', desc: 'zustand-desc' },
        ],
    },
    'spotify-clone': {
        tags: ['fullStack'],
        coverImageUrl: spotifyCloneImg.img_1,
        keyFeatures: ['desc-1', 'desc-2', 'desc-3', 'desc-4', 'desc-5', 'desc-6', 'desc-7'],
        snapshots: [
            { id: 'spotify-clone-img-1', desc: 'desc-1', imageUrl: spotifyCloneImg.img_1 },
            { id: 'spotify-clone-img-2', desc: 'desc-2', imageUrl: spotifyCloneImg.img_2 },
            { id: 'spotify-clone-img-3', desc: 'desc-3', imageUrl: spotifyCloneImg.img_3 },
            { id: 'spotify-clone-img-4', desc: 'desc-5', imageUrl: spotifyCloneImg.img_4 },
            { id: 'spotify-clone-img-5', desc: 'desc-4', imageUrl: spotifyCloneImg.img_5 },
            { id: 'spotify-clone-img-6', desc: 'desc-6', imageUrl: spotifyCloneImg.img_6 },
            { id: 'spotify-clone-img-7', desc: 'desc-7', imageUrl: spotifyCloneImg.img_7 },
        ],
        techStacks: ['next-js', 'typescript', 'tailwindcss', 'postgresql'],
        webDevToolkits: [
            { id: 'zustand', name: 'Zustand', desc: 'zustand-desc' },
            { id: 'supabase', name: 'Supabase', desc: 'supabase-desc' },
            { id: 'stripe', name: 'Stripe', desc: 'stripe-desc' },
        ],
    },
    'github-issues-clone': {
        tags: ['frontend'],
        coverImageUrl: githubIssuesCloneImg.img_1,
        snapshots: [
            { id: 'github-issues-clone-img-1', desc: 'desc-1', imageUrl: githubIssuesCloneImg.img_1 },
            { id: 'github-issues-clone-img-2', desc: 'desc-2', imageUrl: githubIssuesCloneImg.img_2 },
            { id: 'github-issues-clone-img-3', desc: 'desc-3', imageUrl: githubIssuesCloneImg.img_3 },
            { id: 'github-issues-clone-img-4', desc: 'desc-4', imageUrl: githubIssuesCloneImg.img_4 },
            { id: 'github-issues-clone-img-5', desc: 'desc-5', imageUrl: githubIssuesCloneImg.img_5 },
            { id: 'github-issues-clone-img-6', desc: 'desc-6', imageUrl: githubIssuesCloneImg.img_6 },
            { id: 'github-issues-clone-img-7', desc: 'desc-7', imageUrl: githubIssuesCloneImg.img_7 },
            { id: 'github-issues-clone-img-8', desc: 'desc-8', imageUrl: githubIssuesCloneImg.img_8 },
            { id: 'github-issues-clone-img-9', desc: 'desc-9', imageUrl: githubIssuesCloneImg.img_9 },
        ],
        keyFeatures: ['desc-1', 'desc-2', 'desc-3', 'desc-4', 'desc-5', 'desc-6', 'desc-7', 'desc-8'],
        techStacks: ['react-js', 'typescript', 'styled-components', 'redux', 'firebase'],
        webDevToolkits: [
            { id: 'storybook', name: 'StoryBook', desc: 'storybook-desc' },
            { id: 'supabase', name: 'Supabase', desc: 'supabase-desc' },
        ],
    },
};
