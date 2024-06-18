'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

import { useInfoList } from '../_hooks/use-info-list';

export const InfoArea = () => {
    const { infoList } = useInfoList();
    return (
        <Accordion type="single" collapsible className="w-full">
            {infoList.map(item => (
                <AccordionItem key={item.title} value={item.title} className="border-none">
                    <AccordionTrigger className="h-9 text-main-light-green no-underline hover:no-underline">
                        <div className="flex items-center gap-x-2">
                            {item.icon}
                            {item.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        {item.content.map(btn => (
                            <Button
                                key={btn.title}
                                variant="main"
                                className="ml-2 flex h-8 w-40 items-center justify-start gap-x-2 space-y-2 text-xs"
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
