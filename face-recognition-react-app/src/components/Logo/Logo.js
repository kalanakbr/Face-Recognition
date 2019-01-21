import React from 'react';
import Tilt from 'react-tilt';
import anonymous from './anonymouspic.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className ='ma3 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }}  style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa3"> 
             <img alt='logo' src={anonymous}/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;