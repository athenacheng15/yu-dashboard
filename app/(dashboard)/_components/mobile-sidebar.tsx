'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetOverlay } from '@/components/ui/sheet';

import { Sidebar } from './sidebar';

export const MobileSidebar = () => {
    const pathname = usePathname();
    const [isMount, setIsMount] = useState(false);

    const onOpen = useMobileSidebar(state => state.onOpen);
    const onClose = useMobileSidebar(state => state.onClose);
    const isOpen = useMobileSidebar(state => state.isOpen);

    useEffect(() => {
        setIsMount(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    if (!isMount) return null;
    return (
        <>
            <Button
                onClick={onOpen}
                className="mr-2 block h-8 p-2 md:hidden"
                variant="main"
                size="sm"
            >
                <Menu className="h-4 w-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side="top" className="border-none p-0 md:hidden">
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </>
    );
};
