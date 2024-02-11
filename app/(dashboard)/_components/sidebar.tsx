'use client';

import Image from 'next/image';

import { ChannelBtn } from './channel';
import { InfoArea } from './info-area';

export const Sidebar = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-between bg-main-green px-4 py-10">
            <div className="flex h-full w-full flex-col items-center">
                <Image
                    src="/avatar-tw.svg"
                    alt="avatar-tw"
                    height={160}
                    width={160}
                />
                <p className="text-white mt-4 text-2xl font-bold">
                    YuChun Cheng
                </p>
                <div className="mt-6">
                    <ChannelBtn />
                </div>
            </div>
            <div className="w-44">
                <InfoArea />
            </div>
        </div>
    );
};
