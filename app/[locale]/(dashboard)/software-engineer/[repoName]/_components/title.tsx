'use client';

import type { DisplayRepoDetailType } from '@/types/repositories';

import { useTranslations } from 'next-intl';
import { Clock2, PencilLine } from 'lucide-react';
import dayjs from 'dayjs';

import { NavigateBtns } from './navigate-btns';

export const Title = ({ repoDetail }: { repoDetail: DisplayRepoDetailType | null }) => {
    const t = useTranslations('common');
    if (!repoDetail) return null;

    return (
        <div className="relative z-10 mb-8 flex h-full w-full flex-col rounded-xl border-2 border-main-green bg-white p-4 text-main-green shadow-solid-lg md:flex-row">
            <div className="space-y-3 md:grow">
                <div className="flex items-center justify-between font-medium md:justify-start">
                    <h2 className="mr-6 text-2xl">{repoDetail.name}</h2>
                    <div className="flex space-x-2">
                        {repoDetail.tags.map(tag => (
                            <div
                                key={tag}
                                className="flex h-6 items-center justify-between rounded-sm bg-[#f0f4f1] px-2 text-xs"
                            >
                                <div>{tag}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-sm text-gray-600">{repoDetail.description}</p>
                <p className="text-sm text-gray-400">({t('confidentiality-agreements-img')})</p>
                <div className="flex flex-wrap justify-between">
                    {(repoDetail.created_at || repoDetail.updated_at) && (
                        <div className="mr-2 flex flex-col space-y-1 text-xs md:flex-row md:space-x-3 md:space-y-0">
                            <div className="flex flex-nowrap items-center">
                                <Clock2 className="mr-1 h-4 w-3 text-main-green" />
                                <div className="flex flex-wrap">
                                    <p className="hidden md:block">{t('created')}</p>
                                    <p className="hidden md:block">{`：`}</p>
                                    <p>{dayjs(repoDetail.created_at).format('YYYY/MM/DD')}</p>
                                </div>
                            </div>
                            <div className="flex flex-nowrap items-center">
                                <PencilLine className="mr-1 h-4 w-3 text-main-green" />
                                <div className="flex flex-wrap">
                                    <p className="hidden md:block">{t('updated')}</p>
                                    <p className="hidden md:block">{`：`}</p>
                                    <p>{dayjs(repoDetail.updated_at).format('YYYY/MM/DD')}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex space-x-2 md:hidden">
                        {repoDetail.isConfidential ? (
                            <p className="text-sm text-gray-300">
                                Due to confidentiality agreements, access to the website and repository is restricted.
                            </p>
                        ) : (
                            <NavigateBtns
                                isWebsiteUnabled={repoDetail.isWebsiteUnabled}
                                githubUrl={repoDetail.html_url}
                                webSiteUrl={repoDetail.homepage}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="mx-4 hidden w-[2px] bg-[#92AA94] md:block"></div>
            <div className="hidden w-40 min-w-36 flex-col items-center justify-center space-y-4 md:flex">
                {repoDetail.isConfidential ? (
                    <p className="text-sm text-gray-300">{t('confidentiality-agreements')}</p>
                ) : (
                    <NavigateBtns
                        isWebsiteUnabled={repoDetail.isWebsiteUnabled}
                        githubUrl={repoDetail.html_url}
                        webSiteUrl={repoDetail.homepage}
                    />
                )}
            </div>
        </div>
    );
};
