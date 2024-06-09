'use client';

import type { ISnapshot } from '@/database/type';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ImgCarouselProps {
    imgList: ISnapshot[];
}

export const ImgCarousel = ({ imgList }: ImgCarouselProps) => {
    return (
        <Carousel
            className="flex w-full max-w-[90%] items-center"
            opts={{
                loop: true,
                dragFree: true,
            }}
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
        >
            <CarouselContent className="flex items-center">
                {imgList.map(item => (
                    <CarouselItem key={item.id} className="basis-2/3">
                        <div className="text-center">
                            <Image
                                src={item.imageUrl}
                                alt={item.id}
                                className="rounded-lg border-2 border-main-light-green"
                            />
                            <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="left-3 hidden border-2 border-white bg-opacity-70 md:flex" />
            <CarouselNext className="right-3 hidden border-2 border-white bg-opacity-70 md:flex" />
        </Carousel>
    );
};
