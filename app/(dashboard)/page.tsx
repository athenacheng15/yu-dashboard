'use client';

import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex h-full w-full items-center justify-center text-neutral-700">
            <div className="flex h-full w-72 flex-col items-center justify-center gap-y-6 text-justify indent-8 font-medium text-main-dark-green md:mt-12 md:w-[560px] md:text-lg">
                <div>
                    Hey there, It's Yuchun here. First off, thank you for
                    stopping by. I used to work as an urban planner and
                    architect, but now I'm a software engineer at an e-commerce
                    company, mainly focusing on frontend development. While
                    frontend is my specialty, I'm also actively learning
                    full-stack skills to broaden my expertise.
                </div>

                <div>
                    It's important for me to properly document my life and
                    career journey, allowing me to reflect on my growth. That's
                    why I created this website. From UI design to coding,
                    everything you see here is a labor of love.
                </div>

                <div>
                    Currently, the website primarily showcases some
                    coding-related projects, but I also plan to incorporate some
                    content related to architecture and urban planning in the
                    future, as both are crucial aspects of my life. I hope you
                    enjoy browsing and feel the passion and professionalism that
                    I put into my work.
                </div>
                <Button
                    variant="main"
                    className="group flex w-60 space-x-2"
                    onClick={() => {
                        router.push('software-engineer');
                    }}
                >
                    <div className="group-hover:text-main-dark-green">
                        <Rocket className="w-5" />
                    </div>
                    <p className="text-base"> Go Explore !</p>
                </Button>
            </div>
        </div>
    );
}
