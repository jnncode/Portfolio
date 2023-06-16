import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function Intro() {
    const [isAnimating, setAnimating] = useState(true);

    const animation = useSpring ({
        from: { opacity: isAnimating ? 0 : 1 }, // initial state
        to: { opacity: isAnimating ? 1 : 0 }, // final state
        config: { duration: 1000 }, // animation duration in ms
        onRest: () => {
            // restarts the animation once completed
            setAnimating(!isAnimating);
        },
    });

    return (
        <animated.div style={animation}>
            <div className='flex justify-center items-center h-screen'>
                <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer &amp;Content Creator</p>
            </div>
        </animated.div>
        
    )
}

export default Intro;