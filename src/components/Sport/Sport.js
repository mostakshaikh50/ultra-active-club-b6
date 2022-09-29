import React, { useEffect, useState } from 'react';
import Batting from '../Batting/Batting';
import './Sport.css'

const Sport = () => {

    const [sports, setSports]  = useState([]);

    useEffect(()=>{
        fetch('sports.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, []);

    return (
        <div className='sports-container'>            
           {/* <p>Select your favorite bating style</p> */}
           <div className="bating-style-container">
                
                {
                  sports.map(sport => <Batting 
                    key={sport.id}
                    sport = {sport}
                    ></Batting>)  
                }
           </div>
           <div className="my-content-container">
                <h3>Myself Container</h3>
           </div>
        </div>
    );
};

export default Sport;