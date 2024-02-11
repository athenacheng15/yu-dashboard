'use client';

import { Send, Globe, Linkedin, Github, Mail } from 'lucide-react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export const InfoArea = () => {
    const infoList = [
        {
            title: 'Contact',
            icon: <Send className="w-4" />,
            content: [
                {
                    title: 'Email',
                    icon: <Mail className="w-4" />,
                    onClick: (e: React.MouseEvent<HTMLElement>) => {
                        // TODO:check function
                        window.open('mailto:athenachengyc15@gmail.com');
                        e.preventDefault();
                    },
                },
                {
                    title: 'Linkedin',
                    icon: <Linkedin className="w-4" />,
                    onClick: () => {
                        window.open(
                            'https://www.linkedin.com/in/yuchuncheng-athena/',
                        );
                    },
                },
                {
                    title: 'Github',
                    icon: <Github className="w-4" />,
                    onClick: () => {
                        window.open('https://github.com/athenacheng15');
                    },
                },
            ],
        },
        {
            title: 'Language',
            icon: <Globe className="w-4" />,
            content: [
                {
                    title: '繁體中文',
                    icon: '',
                    onClick: () => {},
                },
                {
                    title: 'English',
                    icon: '',
                    onClick: () => {},
                },
                {
                    title: '日本語',
                    icon: '',
                    onClick: () => {},
                },
            ],
        },
    ];
    return (
        <Accordion type="single" collapsible className="w-full">
            {infoList.map(item => (
                <AccordionItem
                    key={item.title}
                    value={item.title}
                    className="border-none"
                >
                    <AccordionTrigger className="text-main-light-green h-9 no-underline hover:no-underline">
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
