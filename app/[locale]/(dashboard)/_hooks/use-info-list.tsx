'use client';

import type { InfoSection } from '@/types/info';

import { Send, Globe, Linkedin, Github, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { useRouter, usePathname } from '@/navigation';

export const useInfoList = () => {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('common');

    const handleChange = (locale: string) => {
        router.push(pathname, { locale });
    };
    const infoList: InfoSection[] = [
        {
            title: t('contact'),
            value: 'contact',
            icon: <Send className="w-4" />,
            content: [
                {
                    title: t('email'),
                    icon: <Mail className="w-4" />,
                    onClick: () => {},
                },
                {
                    title: 'Linkedin',
                    icon: <Linkedin className="w-4" />,
                    onClick: () => {
                        window.open('https://www.linkedin.com/in/yuchuncheng-athena/');
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
            title: t('language'),
            value: 'language',
            icon: <Globe className="w-4" />,
            content: [
                {
                    title: '繁體中文',
                    value: 'zh-TW',
                    onClick: () => {
                        handleChange('zh-TW');
                    },
                },
                {
                    title: 'English',
                    value: 'en',
                    onClick: () => {
                        handleChange('en');
                    },
                },
                {
                    title: '日本語',
                    value: 'ja',
                    onClick: () => {
                        handleChange('ja');
                    },
                },
            ],
        },
    ];

    return { infoList };
};
