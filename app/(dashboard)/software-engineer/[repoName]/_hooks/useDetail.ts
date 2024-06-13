import type { DisplayRepoDetailType, RepoDetailType } from '@/types/repositories';

import axios from 'axios';
import { pick } from 'lodash';

import { repostories } from '@/database/repostories';
import { useEffect, useState } from 'react';

interface ReturnType {
    isLoading: boolean;
    repoDetail: DisplayRepoDetailType | null;
}

export const useDetail = ({ repoName }: { repoName: string }): ReturnType => {
    const [repoDetail, setRepoDetail] = useState<DisplayRepoDetailType | null>(null);
    const [isLoading, setIsloading] = useState<boolean>(false);

    useEffect(() => {
        const getDetail = async () => {
            try {
                setIsloading(true);
                const response = await axios.get(`https://api.github.com/repos/athenacheng15/${repoName}`);
                const data: RepoDetailType = response.data;
                const formattedRepos = {
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    html_url: data.html_url,
                    homepage: data.homepage,
                    created_at: data.created_at,
                    updated_at: data.updated_at,
                    ...pick(repostories[data.name], ['tags']),
                };
                setRepoDetail(formattedRepos);
            } catch (error) {
                console.error('Error fetching repositorie detail:', error);
                throw error;
            } finally {
                setIsloading(false);
            }
        };
        getDetail();
    }, []);

    return { isLoading, repoDetail };
};
