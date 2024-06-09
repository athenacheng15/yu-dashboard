import { Github, Link2, Clock2, PencilLine, Settings, Image as ImageIcon } from 'lucide-react';
import dayjs from 'dayjs';

import { Button } from '@/components/ui/button';

export const Title = () => {
    return (
        <div className="shadow-solid-lg relative z-10 mb-8 flex h-full w-full rounded-xl border-2 border-main-green bg-white p-4 text-main-green">
            <div className="grow space-y-3">
                <div className="flex items-center font-medium ">
                    <h2 className="mr-6 text-2xl">Airbnb Clone</h2>
                    <div className="flex h-6 items-center justify-between rounded-md bg-main-light-green p-1 text-xs">
                        <div>Full Stack</div>
                    </div>
                </div>
                <p className="text-sm text-gray-400">
                    This is a full-stack project exercise using NEXT.JS as the framework refer to the video of code with
                    Antonio
                </p>
                <div className="flex space-x-3 text-xs">
                    <div className="flex items-center">
                        <Clock2 className="mr-1 h-4 w-3 text-main-green" />
                        <p className="hidden sm:flex">Created : {dayjs('2024-06-08').format('YYYY/MM/DD')}</p>
                    </div>
                    <div className="flex items-center">
                        <PencilLine className="mr-1 h-4 w-3 text-main-green" />
                        <p className="hidden sm:flex">Updated : {dayjs('2024-06-08').format('YYYY/MM/DD')}</p>
                    </div>
                </div>
            </div>
            <div className="mx-4 w-px bg-gray-500"></div>
            <div className="flex w-40 flex-col items-center justify-center space-y-4">
                <Button
                    className="flex h-8 w-full justify-start"
                    variant="outline"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <Github className="mr-2 w-5" />
                    View Github
                </Button>
                <Button
                    className="flex h-8 w-full justify-start"
                    variant="outline"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <Link2 className="mr-2 w-5" />
                    Go To Website
                </Button>
            </div>
        </div>
    );
};
