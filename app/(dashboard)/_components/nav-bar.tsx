'use client';

import Image from 'next/image';
import { Send, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { MobileSidebar } from './mobile-sidebar';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b bg-main-green px-4 shadow-sm md:hidden">
            <div className="flex items-center gap-x-4">
                <Image
                    src="/avatar-tw.svg"
                    alt="avatar-tw"
                    height={36}
                    width={36}
                />
                <p className="text-md font-bold text-white">YuChun Cheng</p>
            </div>
            <div className="flex items-center space-x-1">
                <Button variant="main" className="h-8 p-2">
                    <Send className="w-4" />
                </Button>
                <Button variant="main" className="h-8 p-2">
                    <Globe className="w-4" />
                </Button>
                <MobileSidebar />
            </div>
        </nav>
    );
};
