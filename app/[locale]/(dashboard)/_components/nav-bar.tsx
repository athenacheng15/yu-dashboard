'use client';

import Image from 'next/image';
import { Send, Globe } from 'lucide-react';

import { useInfoModal } from '@/hooks/use-info-modal';
import { Button } from '@/components/ui/button';

import { MobileSidebar } from './mobile-sidebar';

import { useInfoList } from '../_hooks/use-info-list';

export const Navbar = () => {
    const infoModal = useInfoModal();
    const { infoList } = useInfoList();
    const contactData = infoList.find(data => data.title === 'Contact');
    const languageData = infoList.find(data => data.title === 'Language');

    return (
        <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b bg-main-green px-4 shadow-sm md:hidden">
            <div className="flex items-center gap-x-4">
                <Image src="/avatar-tw.svg" alt="avatar-tw" height={36} width={36} />
                <p className="text-md font-bold text-white">YuChun Cheng</p>
            </div>
            <div className="flex items-center space-x-1">
                <Button variant="main" className="h-8 p-2" onClick={() => infoModal.onOpen(contactData!)}>
                    <Send className="w-4" />
                </Button>
                <Button variant="main" className="h-8 p-2" onClick={() => infoModal.onOpen(languageData!)}>
                    <Globe className="w-4" />
                </Button>
                <MobileSidebar />
            </div>
        </nav>
    );
};