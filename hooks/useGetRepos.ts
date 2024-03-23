import { DisplayRepoType, RepoType } from '@/types/repositories';

import axios from 'axios';
import { repostories } from '@/database/repostories';

interface Repositories {
    [key: string]: {
        tags: string[];
        coverImageUrl: string;
    };
}

export const useGetRepos = async (): Promise<DisplayRepoType[]> => {
    try {
        const response = await axios.get(
            'https://api.github.com/users/athenacheng15/repos',
        );
        const data: RepoType[] = response.data;
        const displayedData = data.filter(repo =>
            repostories.hasOwnProperty(repo.name),
        );
        const formattedRepos = displayedData.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            ...(repostories as Repositories)[repo.name],
        }));
        return formattedRepos;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error;
    }
};
