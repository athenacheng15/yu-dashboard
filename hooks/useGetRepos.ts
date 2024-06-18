import type { DisplayRepoType, RepoType } from '@/types/repositories';

import axios from 'axios';
import { pick } from 'lodash';

import { repostories } from '@/database/repostories';

export const useGetRepos = async (): Promise<DisplayRepoType[]> => {
    const config = {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}` },
    };
    try {
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
            ...pick(repostories[repo.name], ['tags', 'coverImageUrl']),
        }));
        return formattedRepos;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error;
    }
};
