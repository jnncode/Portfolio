import React from 'react';
import TimelineJS from '../data/TimelineJS';
import TimelineItem from './TimelineItem';

function Intro() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-center'>
                <p className='text-base md:text-xl mb-3 font-md'>
                    <span className="block text-4xl font-bold">J Nguyen</span>
                    <span className="block text-base font-semibold">Software Engineer &amp; Content Creator</span>
                </p>
            </div>
            <div className='flex flex-col md:flex-row justify-center my-20'>
                <div className='w-full md:w-7/12'>
                    <h1 className='text-center text-lg md:text-lg mb-2 md:mb-3 font-semibold'>
                        Timeline
                    </h1>
                    {TimelineJS.map((item) => (
                        <TimelineItem
                            key={item.year}
                            year={item.year}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Intro;
