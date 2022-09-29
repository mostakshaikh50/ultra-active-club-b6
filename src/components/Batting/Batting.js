import React from 'react';
import './Batting.css'

const Batting = (props) => {
    const {name, img, time, description} = props.sport;
    
    return (
        <div className='batting'>
            <img src={img} alt="" />
            <p className='batting-style-name'>{name}</p>
            <p className='batting-description'>{description}</p>
            <p className='batting-time'>Time required: {time}</p>
            <button onClick={() => props.handleAddToCart(props.sport)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
        
    );
};

export default Batting;