'use client';

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
    const infoList = [
        {
            title: t('contact'),
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
            icon: <Globe className="w-4" />,
            content: [
                {
                    title: '繁體中文',
                    icon: '',
                    onClick: () => {
                        handleChange('zh-TW');
                    },
                },
                {
                    title: 'English',
                    icon: '',
                    onClick: () => {
                        handleChange('en');
                    },
                },
                {
                    title: '日本語',
                    icon: '',
                    onClick: () => {
                        handleChange('ja');
                    },
                },
            ],
        },
    ];

    return { infoList };
};
