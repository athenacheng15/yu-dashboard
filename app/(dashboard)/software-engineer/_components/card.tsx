'use client';
import { DisplayRepoType } from '@/type/repositories';
import { useRouter } from 'next/navigation';

import { Separator } from '@/components/ui/separator';

import { CardFooter } from './card-footer';

export const Card = ({ repo }: { repo: DisplayRepoType }) => {
    const router = useRouter();

    return (
        <div
            className="group col-span-1 cursor-pointer rounded-xl border-2 border-main-green bg-white/70 p-3 hover:bg-[#F2F7F2]/70 sm:p-4"
            onClick={() => router.push(`/software-engineer/${repo.name}`)}
        >
            <div>
                <div className="flex w-full flex-col gap-2">
                    <div className="flex justify-between space-x-3">
                        <div className="relative aspect-video w-3/4 overflow-hidden rounded-xl sm:w-full">
                            {/* TODO image*/}
                            <div className="h-full w-full bg-neutral-300"></div>
                        </div>
                        <div className="flex grow sm:hidden">
                            <CardFooter repo={repo} />
                        </div>
                    </div>
                    <p className="text-xl font-medium text-main-green">
                        {repo.name}
                    </p>
                    <p className="text-sm font-medium text-neutral-500">
                        {repo.description}
                    </p>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:gap-2">
                    <Separator className="my-2" />
                    <CardFooter repo={repo} />
                </div>
            </div>
        </div>
    );
};
