'use client';

import { Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { useRouter } from '@/navigation';
import { Button } from '@/components/ui/button';

export default function Home() {
    const router = useRouter();
    const t = useTranslations('home');

    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex h-[82vh] flex-col items-center justify-center gap-y-6 px-3 text-justify indent-8 font-normal text-main-dark-green md:mt-12 md:w-[560px] md:text-base">
                <div>{t('phase-1')}</div>
                <div>{t('phase-2')}</div>
                <div>{t('phase-3')}</div>

                <Button
                    variant="main"
                    className="group flex w-60 space-x-2"
                    onClick={() => {
                        router.push('/software-engineer');
                    }}
                >
                    <div className="group-hover:text-main-dark-green">
                        <Rocket className="w-5" />
                    </div>
                    <p className="text-base">{t('go-explore')}</p>
                </Button>
            </div>
        </div>
    );
}
