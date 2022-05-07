import React from 'react';
import Profile from '../Profile/Profile';
import './Body.css';
import Stream from './Strem/Stream';

const Body = () => {
    return (
        <div className='body'>
            <div className="body__left">
                <Stream />
                <Profile />
            </div>

            <div className="body__rightPlaceHolder">
              
            </div>
        </div>
    );
};

export default Body;