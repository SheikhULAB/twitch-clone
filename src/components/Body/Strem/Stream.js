import React from 'react';
import './Strem.css';

const Stream = () => {
    return (
        <div className='stream'>
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusIndicator">OFFLINE</div>
                        <h2>Check out the below stream from sheikhyeamin is live</h2>
                    </div>
                    <div className="stream__statusInfo">
                        <i className='fas fa-bell'></i>
                        <p>You will be notified when sheikh yeamin is live</p>
                    </div>
                </div>
            </div>

            <div className="stream__videoEmbed">
                <iframe 
                title='CryptoPunk'
                width="500"
                height="295"
                src="https://www.youtube.com/embed/hhZtiytNaBQ"
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                allowFullScreen
                frameBorder="0">
                 </iframe>
            </div>
        </div>
    );
};

export default Stream;