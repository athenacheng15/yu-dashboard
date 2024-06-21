'use client';

import { ShieldX } from 'lucide-react';

const Error = () => {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center font-semibold text-main-green">
            <ShieldX size={28} className="mb-4" />
            <p className="text-lg ">Woops!</p>
            <p className="text-lg ">Something went wrong.</p>
        </div>
    );
};

export default Error;
