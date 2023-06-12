import React from 'react';
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
    return (
        <NavigationContainer>
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
            <Links>
                <li><a href='../Intro' onClick={() => navigateTo('../Intro')}>home.</a></li>
                <li><a href='../Project' onClick={() => navigateTo('../Project')}>projects.</a></li>
                <li><a href='../Contact' onClick={() => navigateTo('../Contact')}>contact.</a></li>
                <li><a href='../About' onClick={() => navigateTo('../About')}>about.</a></li>
            </Links>
        </NavigationContainer>
    )
}

export default Navigation;
