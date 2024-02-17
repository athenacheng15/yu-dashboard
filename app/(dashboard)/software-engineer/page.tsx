import { Card } from './_components/card';
import { Tags } from './_components/tags';

import { useGetRepos } from '@/hooks/useGetRepos';

export default async function SoftwareEngineerPage() {
    const repos = await useGetRepos();
    return (
        <div className="space-y-8">
            <div>
                <Tags />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {repos.map(repo => (
                    <Card key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    );
}
