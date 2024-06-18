'use client';

import { useTranslations } from 'next-intl';
import { Github, Link2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Props {
    githubUrl: string;
    webSiteUrl: string;
}

export const NavigateBtns = ({ githubUrl, webSiteUrl }: Props) => {
    const t = useTranslations('common');
    return (
        <>
            <Button
                className="flex h-8 w-full items-center justify-start"
                variant="outline"
                onClick={e => {
                    e.stopPropagation();
                    window.open(githubUrl);
                }}
            >
                <Github className="mr-1 w-5" />
                <p className="hidden sm:flex">{t('view-github')}</p>
            </Button>
            <Button
                className="flex h-8 w-full items-center justify-start"
                variant="outline"
                onClick={e => {
                    e.stopPropagation();
                    window.open(webSiteUrl);
                }}
            >
                <Link2 className="mr-1 w-5" />
                <p className="hidden sm:flex">{t('go-to-website')}</p>
            </Button>
        </>
    );
};
