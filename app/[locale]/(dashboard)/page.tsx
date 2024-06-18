'use client';

import { Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { useRouter } from '@/navigation';
import { Button } from '@/components/ui/button';

export default function Home() {
    const router = useRouter();
    const t = useTranslations('home');

    return (
        <div className="flex h-full w-full items-center justify-center text-neutral-700">
            <div className="flex h-full w-72 flex-col items-center justify-center gap-y-6 text-justify indent-8 font-medium text-main-dark-green md:mt-12 md:w-[560px] md:text-lg">
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
