'use client';

import { useRouter } from 'next/navigation';
import { Github, Link2, Clock2, PencilLine } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const CardFooter = () => {
    const router = useRouter();

    return (
        <div className="flex items-center justify-between">
            <div className="text-[10px] text-main-green">
                <div className="flex items-center">
                    <Clock2 className="mr-1 h-4 w-3 text-main-green" />
                    Created : 2023/12/06
                </div>
                <div className="flex items-center">
                    <PencilLine className="mr-1 h-4 w-3 text-main-green" />
                    Updated : 2024/02/24
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2">
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
