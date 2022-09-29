import React from 'react';
import './Sport.css'

const Sport = () => {
    return (
        <div className='sports-container'>            
           <p>Select your favorite bating style</p>
           <div className="bating-style-container">
                <h3>This Is sports Container</h3>
           </div>
           <div className="my-content-container">
                <h3>Myself Container</h3>
           </div>
        </div>
    );
};

export default Sport;