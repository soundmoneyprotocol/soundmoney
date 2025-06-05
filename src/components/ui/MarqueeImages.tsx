import React from 'react';
import Marquee from 'react-fast-marquee';

interface MarqueeImagesProps {
    images: string[];
    speed: number;
    direction: 'left' | 'right';
    spacing: string;
    imageSize?: number;
}

export function MarqueeImages({
    images,
    speed,
    direction,
    spacing,
    imageSize = 75
}: MarqueeImagesProps) {
    return (
        <div className='relative w-full'>
            <div className='w-full border-t border-dotted border-black' />
            <div className='absolute inset-x-0 -top-[37.5px]'>
                <Marquee
                    speed={speed}
                    direction={direction}
                    gradient={false}
                >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Profile ${i + 1}`}
                            className={`w-[${imageSize}px] h-[${imageSize}px] rounded-full object-cover ${spacing}`}
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}