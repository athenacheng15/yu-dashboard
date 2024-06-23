'use client';

import { useLocale } from 'next-intl';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

import { useInfoList } from '../_hooks/use-info-list';

export const InfoArea = () => {
    const locale = useLocale();
    const { infoList } = useInfoList();
    const isActiveLocale = (title: string, currentLocale: string, buttenValue?: string) => {
        return title === 'language' && buttenValue === currentLocale;
    };
    return (
        <Accordion type="single" collapsible className="w-full">
            {infoList.map(item => (
                <AccordionItem key={item.title} value={item.title} className="border-none">
                    <AccordionTrigger className="h-8 text-main-light-green no-underline hover:no-underline">
                        <div className="flex items-center gap-x-2 text-sm">
                            {item.icon}
                            {item.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-1">
                        {item.content.map(btn => (
                            <Button
                                key={btn.title}
                                variant="main"
                                className={`ml-2 flex h-7 w-40 items-center justify-start gap-x-2 text-xs 
                                    ${isActiveLocale(item.value, locale, btn.value) ? 'bg-main-hover-green text-white' : ''}`}
                                onClick={btn.onClick}
                            >
                                {btn.icon}
                                {btn.title}
                            </Button>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
