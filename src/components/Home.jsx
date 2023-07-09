import React from 'react';
import TimelineJS from '../data/TimelineJS';
import TimelineItem from './TimelineItem';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <div className='justify-center items-center'>
            <div className='flex md:flex-row justify-center mt-20'>
                <div className='md:w-7/12'>
                    <span className='block text-4xl font-bold'>J Nguyen</span>
                    <span className='block text-base font-bold'>
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                1000,
                                'Content Creator',
                                1000,
                                'Designer',
                                1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                    <h1 className='text-center text-lg md:text-lg mb-2 md:mb-3 font-semibold'>
                        Timeline
                    </h1>
                    {TimelineJS.map((item) => (
                        <TimelineItem
                            year={item.year}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;
