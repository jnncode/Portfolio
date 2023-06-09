import React from 'react';
import styled from 'styled-components';

const navigation = styled.nav`
    background-color: #12292B; 
    padding: 10px; 
`;

const logo = styled.div`
    font-weight: bold;
`;

const links = styled.ul`
    list-style: none; 
    display: flex;
    margin: 0;
    padding: 0;
`;

function Navigation() {
    return (
        <nav className={navigation}>
            <div className={logo}></div>
            <ul className={links}>
                <li><a href='#'>home.</a></li>  
                <li><a href='projects'>projects.</a></li>
                <li><a href='contact'>contact.</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
