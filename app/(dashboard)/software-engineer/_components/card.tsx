'use client';

import { useRouter } from 'next/navigation';

import { Separator } from '@/components/ui/separator';

import { CardFooter } from './card-footer';

export const Card = () => {
    const router = useRouter();

    return (
        <div
            className="group col-span-1 cursor-pointer rounded-xl border-2 border-main-green bg-white/70 p-3 hover:bg-[#F2F7F2]/70 sm:p-4"
            onClick={() => router.push(`/software-engineer`)}
        >
            <div>
                <div className="flex w-full flex-col gap-2">
                    <div className="flex justify-between space-x-3">
                        <div className="relative aspect-video w-3/4 overflow-hidden rounded-xl sm:w-full">
                            {/* TODO image*/}
                            <div className="h-full w-full bg-neutral-300"></div>
                        </div>
                        <div className="flex grow sm:hidden">
                            <CardFooter />
                        </div>
                    </div>
                    <p className="text-xl font-medium text-main-green">
                        Airbnb Clone
                    </p>
                    <p className="text-sm font-medium text-neutral-500">
                        This is a full-stack project exercise using NEXT.JS as
                        the framework refer to the video of code with Antonio
                    </p>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:gap-2">
                    <Separator className="my-2" />
                    <CardFooter />
                </div>
            </div>
        </div>
    );
};
