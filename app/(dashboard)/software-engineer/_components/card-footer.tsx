'use client';

import { useRouter } from 'next/navigation';
import { Github, Link2, Clock2, PencilLine } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const CardFooter = () => {
    const router = useRouter();

    return (
        <div className="flex w-full flex-col items-start justify-end sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-2 mr-1 text-[10px] text-main-green sm:mb-0">
                <div className="flex items-center">
                    <Clock2 className="mr-1 h-4 w-3 text-main-green" />
                    <p className="hidden sm:flex">Created : 2023/12/06</p>
                    <p className="sm:hidden">2023/12/06</p>
                </div>
                <div className="flex items-center">
                    <PencilLine className="mr-1 h-4 w-3 text-main-green" />
                    <p className="hidden sm:flex">Updated : 2024/02/24</p>
                    <p className="sm:hidden">2024/02/24</p>
                </div>
            </div>
            <div className="flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:justify-end sm:space-x-2 sm:space-y-0">
                <Button className="h-8" variant="outline">
                    <Github className="w-5" />
                </Button>
                <Button className="h-8" variant="outline">
                    <Link2 className="w-5" />
                </Button>
            </div>
        </div>
    );
};
