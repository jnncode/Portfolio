import React from 'react';
import TimelineJS from '../data/TimelineJS';
import TimelineItem from './TimelineItem';

function Timeline() {
    return (
        <div className='flex flex-col md:flex-row justify-center my-20'>
            <div className='w-full md:w-7/12'>
            <h1 className='text-center text-lg md:text-lg mb-2 md:mb-3 font-semibold'>Timeline</h1>
            {TimelineJS.map(item => (
                <TimelineItem
                    year={item.year}
                    title={item.title}
                    description={item.description}
                />
            ))}
            </div>
        </div>
    )
}

export default Timeline;