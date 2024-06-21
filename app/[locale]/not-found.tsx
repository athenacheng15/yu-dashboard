'use client';

import { MapPinOff } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center font-semibold text-main-green">
            <MapPinOff size={28} className="mb-4" />
            <p className="text-lg ">Page Not Found</p>
        </div>
    );
};

export default NotFound;
