'use client';

import Image from 'next/image';

import { ChannelBtn } from './channel';

export const Sidebar = () => {
    return (
        <div className="flex h-full w-full flex-col items-center bg-main-green px-4 py-10">
            <Image
                src="/avatar-tw.svg"
                alt="avatar-tw"
                height={160}
                width={160}
            />
            <p className="text-white mt-4 text-2xl font-bold">YuChun Cheng</p>
            <div className="mt-6">
                <ChannelBtn />
            </div>
        </div>
    );
};
