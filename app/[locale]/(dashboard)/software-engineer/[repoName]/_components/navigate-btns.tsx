'use client';

import { useTranslations } from 'next-intl';
import { Github, Link2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { TooltipButton } from '@/components/buttons/tooltip-button';

interface Props {
    githubUrl: string;
    webSiteUrl: string;
    isWebsiteUnabled?: boolean;
}

export const NavigateBtns = ({ githubUrl, webSiteUrl, isWebsiteUnabled }: Props) => {
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
            <TooltipButton
                wrapperClassName="w-full"
                tooltipContant={isWebsiteUnabled ? t('maintain-message') : ''}
                disabled={isWebsiteUnabled}
                className="flex h-8 w-full items-center justify-start"
                variant="outline"
                onClick={e => {
                    e.stopPropagation();
                    window.open(webSiteUrl);
                }}
            >
                <Link2 className="mr-1 w-5" />
                <p className="hidden sm:flex">{t('go-to-website')}</p>
            </TooltipButton>
        </>
    );
};
