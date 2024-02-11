'use client';

import { Button } from '@/components/ui/button';
import { Code2, Home } from 'lucide-react';

export const ChannelBtn = () => {
    const channelInfo = [
        { title: 'Home', icon: <Home className="w-4" /> },
        {
            title: 'SoftWare Engineer',
            icon: <Code2 className="w-4" />,
        },
    ];
    return (
        <div className="w-full space-y-2">
            {channelInfo.map(item => (
                <Button
                    key={item.title}
                    className="group flex w-full items-center justify-start space-x-2 text-lg"
                    variant="main"
                >
                    <div className="group-hover:text-main-dark-green">
                        {item.icon}
                    </div>
                    <p className="mt-1">{item.title}</p>
                </Button>
            ))}
        </div>
    );
};
