import React from 'react';
import './Batting.css'

const Batting = (props) => {
    const {name, img, time, description} = props.sport
    return (
        <div className='batting'>
            <img src={img} alt="" />
        </div>
    );
};

export default Batting;