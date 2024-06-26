'use client';

import { useEffect, useState } from 'react';

import type { DisplayRepoType } from '@/types/repositories';

import { Card } from './_components/card';
import { Tags } from './_components/tags';

import { useGetRepos } from './_hooks/useGetRepos';

export default function SoftwareEngineerPage() {
    const [selectedTag, setSelectedTag] = useState('all');
    const { isLoading, repos } = useGetRepos();

    if (!repos) return null;

    const handleTagChange = (tag: string) => {
        setSelectedTag(tag);
    };

    const filteredRepos = repos.filter(repo => {
        if (selectedTag === 'all') {
            return true;
        }
        return repo.techStacks.some(techStack => techStack.id === selectedTag);
    });
    return (
        <div className="space-y-8">
            <div>
                <Tags onChange={handleTagChange} />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {filteredRepos.map(repo => (
                    <Card key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    );
}
