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
            <div className='absolute inset-x-0' style={{ top: -(imageSize / 2) }}>
                <Marquee
                    speed={speed}
                    direction={direction}
                    gradient={false}
                >
                    {images.map((img, i) => (
                        <div key={i} className={spacing}>
                            <img
                                src={img}
                                alt={`Profile ${i + 1}`}
                                style={{
                                    width: `${imageSize}px`,
                                    height: `${imageSize}px`,
                                }}
                                className='rounded-full object-cover'
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}