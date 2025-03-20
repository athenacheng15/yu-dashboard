'use client';

import type { DisplayRepoType } from '@/types/repositories';

import { useTranslations } from 'next-intl';
import { Github, Link2, Clock2, PencilLine } from 'lucide-react';
import dayjs from 'dayjs';

import { TooltipButton } from '@/components/buttons/tooltip-button';

export const CardFooter = ({ repo }: { repo: DisplayRepoType }) => {
    const t = useTranslations('common');

    return (
        <div className="flex w-full flex-col items-start justify-end sm:flex-row sm:items-center sm:justify-between">
            {(repo.updated_at || repo.created_at) && (
                <div className="mb-2 mr-1 text-[10px] text-main-green sm:mb-0">
                    <div className="flex items-center">
                        <PencilLine className="mr-1 h-4 w-3 text-main-green" />
                        <p className="hidden sm:flex">
                            {t('updated')}: {dayjs(repo.updated_at).format('YYYY/MM/DD')}
                        </p>
                        <p className="sm:hidden">{dayjs(repo.updated_at).format('YYYY/MM/DD')}</p>
                    </div>

                    <div className="flex items-center">
                        <Clock2 className="mr-1 h-4 w-3 text-main-green" />
                        <p className="hidden sm:flex">
                            {t('created')} : {dayjs(repo.created_at).format('YYYY/MM/DD')}
                        </p>
                        <p className="sm:hidden">{dayjs(repo.created_at).format('YYYY/MM/DD')}</p>
                    </div>
                </div>
            )}
            {(repo.html_url || repo.homepage) && (
                <div className="flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:justify-end sm:space-x-2 sm:space-y-0">
                    <TooltipButton
                        tooltipContant={t('view-github')}
                        className="h-8"
                        variant="outline"
                        onClick={e => {
                            e.stopPropagation();
                            window.open(repo.html_url);
                        }}
                    >
                        <Github className="w-5" />
                    </TooltipButton>
                    <TooltipButton
                        tooltipContant={repo.isWebsiteUnabled ? t('maintain-message') : t('go-to-website')}
                        disabled={repo.isWebsiteUnabled}
                        className="h-8"
                        variant="outline"
                        onClick={e => {
                            e.stopPropagation();
                            window.open(repo.homepage);
                        }}
                    >
                        <Link2 className="w-5" />
                    </TooltipButton>
                </div>
            )}
            {repo.isConfidential && (
                <p className="mb-2 mr-1 max-w-32 text-xs text-main-green sm:mb-0 md:max-w-max">
                    {t('confidentiality-agreements')}
                </p>
            )}
        </div>
    );
};
