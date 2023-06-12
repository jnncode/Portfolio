import React from 'react';

function About() {
    return (
        <div>
            <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Content Creator</p>
                <p>An 'engineer' who enjoys programming one byte at a time.</p>             
                <p>
                    GitHub:{' '}
                <a
                    href='www.twitch.tv/jnncode'
                    target='_blank'
                    className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
                    rel='noreferrer noopener'
                >
                    jnncode
                </a>{' '}
                |
                    Twitch:{' '}
                <a
                    href='www.github.com/jnncode'
                    target='_blank'
                    className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
                    rel='noreferrer noopener'
                >
                    jnncode
                </a>{' '}
                </p>
        </div>
    )
}

export default About;

