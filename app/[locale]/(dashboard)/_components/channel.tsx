'use client';

import { useTranslations } from 'next-intl';
import { Code2, Home } from 'lucide-react';

import { useRouter } from '@/navigation';
import { Button } from '@/components/ui/button';

export const ChannelBtn = () => {
    const router = useRouter();
    const t = useTranslations('common');

    const channelInfo = [
        { title: t('home'), icon: <Home className="w-4" />, href: '/' },
        {
            title: t('software-engineer'),
            icon: <Code2 className="w-4" />,
            href: '/software-engineer',
        },
    ];
    return (
        <div className="w-full space-y-2">
            {channelInfo.map(item => (
                <Button
                    key={item.title}
                    className="group flex w-full items-center justify-start space-x-2 text-lg"
                    variant="main"
                    onClick={() => {
                        router.push(item.href);
                    }}
                >
                    <div className="group-hover:text-main-dark-green">{item.icon}</div>
                    <p className="mt-1">{item.title}</p>
                </Button>
            ))}
        </div>
    );
};
