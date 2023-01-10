import React from 'react';
import Nav from '../components/navbar';
import Hero from './hero';

const Header = () => {
    return (
        <div class="hero pb-0.5">
            <Nav></Nav>
            <Hero></Hero>
        </div>
    );
};

export default Header;