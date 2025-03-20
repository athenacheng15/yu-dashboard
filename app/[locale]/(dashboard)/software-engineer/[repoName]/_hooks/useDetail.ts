'use client';

import type { DisplayRepoDetailType, RepoDetailType } from '@/types/repositories';

import axios from 'axios';
import { pick } from 'lodash';

import { repostories } from '@/database/repostories';
import { useEffect, useState } from 'react';
import { NOTFROMGITHUBDATA } from '@/database/localRepo';

interface ReturnType {
    isLoading: boolean;
    repoDetail: DisplayRepoDetailType | null;
}

export const useDetail = ({ repoName }: { repoName: string }): ReturnType => {
    const [repoDetail, setRepoDetail] = useState<DisplayRepoDetailType | null>(null);
    const [isLoading, setIsloading] = useState<boolean>(false);

    const config = {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}` },
    };

    const formatRepoDetail = (data: RepoDetailType) => {
        const formattedRepos = {
            id: data.id,
            name: data.name,
            description: data.description,
            html_url: data.html_url,
            homepage: data.homepage,
            created_at: data.created_at,
            updated_at: data.updated_at,
            ...pick(repostories[data.name], ['tags', 'isWebsiteUnabled', 'isConfidential']),
        };
        setRepoDetail(formattedRepos);
    };

    useEffect(() => {
        const localData = NOTFROMGITHUBDATA.find(repo => repo.name === repoName);
        if (localData) {
            formatRepoDetail(localData);
            setIsloading(false);
        } else {
            const getDetail = async () => {
                try {
                    setIsloading(true);
                    const response = await axios.get(`https://api.github.com/repos/athenacheng15/${repoName}`, config);
                    const data: RepoDetailType = response.data;
                    formatRepoDetail(data);
                } catch (error) {
                    console.error('Error fetching repository detail:', error);
                } finally {
                    setIsloading(false);
                }
            };
            getDetail();
        }
    }, [repoName]);
    return { isLoading, repoDetail };
};
