'use client';
import { DisplayRepoType } from '@/types/repositories';
import { useRouter } from 'next/navigation';

import { Separator } from '@/components/ui/separator';

import { CardFooter } from './card-footer';
import Image from 'next/image';

export const Card = ({ repo }: { repo: DisplayRepoType }) => {
    const router = useRouter();

    return (
        <div
            className="shadow-solid-md hover:shadow-solid-lg group group flex cursor-pointer flex-col justify-between rounded-xl border-2 border-main-green bg-white/70 p-3 transition hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#F2F7F2]/70 sm:p-4"
            onClick={() => router.push(`/software-engineer/${repo.name}`)}
        >
            <div className="flex w-full flex-col gap-2">
                <div className="flex grow justify-between space-x-3">
                    <div className="relative  aspect-video w-3/4 overflow-hidden rounded-xl border-2 border-main-hover-green sm:w-full">
                        <Image
                            src={repo.coverImageUrl}
                            alt={`${repo.name}-cover`}
                            className="h-full w-full transition group-hover:scale-105"
                        />
                    </div>
                    <div className="flex grow sm:hidden">
                        <CardFooter repo={repo} />
                    </div>
                </div>
                <p className="text-xl font-medium text-main-green">{repo.name}</p>
                <p className="text-sm font-medium text-neutral-500">{repo.description}</p>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:gap-2">
                <Separator className="my-2" />
                <CardFooter repo={repo} />
            </div>
        </div>
    );
};
