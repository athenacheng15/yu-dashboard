'use client';

import type { DisplayRepoType, RepoType } from '@/types/repositories';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { pick } from 'lodash';

import { repostories } from '@/database/repostories';

interface ReturnType {
    isLoading: boolean;
    repos: DisplayRepoType[] | null;
}

export const useGetRepos = (): ReturnType => {
    const [repos, setRepos] = useState<DisplayRepoType[] | null>(null);
    const [isLoading, setIsloading] = useState<boolean>(false);

    const config = {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}` },
    };

    useEffect(() => {
        const getRepos = async () => {
            try {
                setIsloading(true);
                const response = await axios.get('https://api.github.com/users/athenacheng15/repos', config);
                const data: RepoType[] = response.data;
                const displayedData = data.filter(repo => repostories.hasOwnProperty(repo.name));
                const formattedRepos = displayedData.map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    html_url: repo.html_url,
                    homepage: repo.homepage,
                    created_at: repo.created_at,
                    updated_at: repo.updated_at,
                    ...pick(repostories[repo.name], ['coverImageUrl', 'techStacks', 'isWebsiteUnabled']),
                }));
                setRepos(formattedRepos);
            } catch (error) {
                console.error('Error fetching repositories :', error);
            } finally {
                setIsloading(false);
            }
        };
        getRepos();
    }, []);

    return { isLoading, repos };
};
