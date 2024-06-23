'use client';

import { useLocale } from 'next-intl';

import { useInfoModal } from '@/hooks/use-info-modal';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const InfoModal = () => {
    const locale = useLocale();
    const infoModal = useInfoModal();

    const isActiveLocale = (title: string, currentLocale: string, buttenValue?: string) => {
        return title === 'language' && buttenValue === currentLocale;
    };

    if (!infoModal.infoData) return null;

    const { title, content, value } = infoModal.infoData;

    return (
        <Dialog open={infoModal.isOpen} onOpenChange={infoModal.onClose}>
            <DialogContent className="w-64 max-w-md overflow-hidden ">
                <DialogHeader>
                    <DialogTitle className="text-lg">{title}</DialogTitle>
                </DialogHeader>
                <div className="my-3 mb-4 flex flex-col items-center space-y-3">
                    {content.map(item => (
                        <Button
                            key={item.title}
                            variant="ghost"
                            className={`text-md group flex h-12 w-40 items-center justify-start gap-x-3 space-y-2 pl-6 ${isActiveLocale(value, locale, item.value) ? 'bg-main-green text-white' : ''}`}
                            onClick={() => {
                                item.onClick();
                                infoModal.onClose();
                            }}
                        >
                            {item.icon && (
                                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-main-green text-white group-hover:bg-white group-hover:text-main-dark-green">
                                    {item.icon}
                                </div>
                            )}
                            {item.title}
                        </Button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};
