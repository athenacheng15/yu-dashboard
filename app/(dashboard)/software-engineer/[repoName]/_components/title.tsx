import type { DisplayRepoDetailType } from '@/types/repositories';

import { Github, Link2, Clock2, PencilLine } from 'lucide-react';
import dayjs from 'dayjs';

import { Button } from '@/components/ui/button';

export const Title = ({ repoDetail }: { repoDetail: DisplayRepoDetailType | null }) => {
    if (!repoDetail) return null;
    return (
        <div className="relative z-10 mb-8 flex h-full w-full rounded-xl border-2 border-main-green bg-white p-4 text-main-green shadow-solid-lg">
            <div className="grow space-y-3">
                <div className="flex items-center font-medium ">
                    <h2 className="mr-6 text-2xl">{repoDetail.name}</h2>
                    <div className="flex space-x-2">
                        {repoDetail.tags.map(tag => (
                            <div
                                key={tag}
                                className="flex h-6 items-center justify-between rounded-sm bg-[#f0f4f1] px-2 text-xs"
                            >
                                <div>{tag}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-sm text-gray-400">{repoDetail.description}</p>
                <div className="flex space-x-3 text-xs">
                    <div className="flex items-center">
                        <Clock2 className="mr-1 h-4 w-3 text-main-green" />
                        <p className="hidden sm:flex">Created : {dayjs(repoDetail.created_at).format('YYYY/MM/DD')}</p>
                    </div>
                    <div className="flex items-center">
                        <PencilLine className="mr-1 h-4 w-3 text-main-green" />
                        <p className="hidden sm:flex">Updated : {dayjs(repoDetail.updated_at).format('YYYY/MM/DD')}</p>
                    </div>
                </div>
            </div>
            <div className="mx-4 w-px bg-gray-500"></div>
            <div className="flex w-40 flex-col items-center justify-center space-y-4">
                <Button
                    className="flex h-8 w-full justify-start"
                    variant="outline"
                    onClick={e => {
                        e.stopPropagation();
                        window.open(repoDetail.html_url);
                    }}
                >
                    <Github className="mr-2 w-5" />
                    View Github
                </Button>
                <Button
                    className="flex h-8 w-full justify-start"
                    variant="outline"
                    onClick={e => {
                        e.stopPropagation();
                        window.open(repoDetail.homepage);
                    }}
                >
                    <Link2 className="mr-2 w-5" />
                    Go To Website
                </Button>
            </div>
        </div>
    );
};
