import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">J Nguyen</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Content Creator</p>
            <p>An 'engineer' who enjoys programming one byte at a time.</p>
            <p>
                GitHub:{' '}
            <a
                href="www.twitch.tv/jnncode"
                target="_blank"
                className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                rel="noreferrer noopener"
            >
                jnncode
            </a>{' '}
            |
                Twitch:{' '}
            <a
                href="www.github.com/jnncode"
                target="_blank"
                className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                rel="noreferrer noopener"
            >
                jnncode
            </a>{' '}
            </p>
            <br />
            <p><i>Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious...and curiosity keeps leading us down new paths. - Walt Disney</i></p>
        </div>
    )
}

export default Intro;