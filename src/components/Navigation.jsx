import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
    background-color: #12292B; 
    padding: 10px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 10px;
`;

const Links = styled.ul`
    list-style: none; 
    display: flex;
    margin: 0;
    padding: 0;

    li {
        margin-right: 10px;
        a {
            color: #FFFFFF;
            text-decoration: none;
        }
    }
`;

function Navigation() {
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
        <NavigationContainer>
            <animated.div style={animation}>
            <Logo>
                <pre>
                    {String.raw`          
      __      __   __     __   __     ______     ______     _____     ______    
     /\ \    /\ "-.\ \   /\ "-.\ \   /\  ___\   /\  __ \   /\  __-.  /\  ___\    
    _\_\ \   \ \ \-.  \  \ \ \-.  \  \ \ \____  \ \ \/\ \  \ \ \/\ \ \ \  __\   
   /\_____\   \ \_\\"\_\  \ \_\\"\_\  \ \_____\  \ \_____\  \ \____-  \ \_____\ 
   \/_____/    \/_/ \/_/   \/_/ \/_/   \/_____/   \/_____/   \/____/   \/_____/     
                    `}       
                </pre>
            </Logo>
            </animated.div>
            <Links>
                <li><a href='../Intro'>home.</a></li>
                <li><a href='../Projects'>projects.</a></li>
                <li><a href='../Contact'>contact.</a></li>
            </Links>
        </NavigationContainer>
    )
}

export default Navigation;
