import React, { useEffect, useState } from 'react';
import Batting from '../Batting/Batting';
import Cart from '../Cart/Cart';
import './Sport.css'


const Sport = () => {

    const [sports, setSports]  = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('sports.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, []);

    const handleAddToCart =(sport) =>{
        console.log(sport);
        const newCart = [...cart, sport];
        setCart(newCart);
    }

    return (
        <div className='sports-container'>            
           {/* <p>Select your favorite bating style</p> */}
           <div className="bating-style-container">
                
                {
                  sports.map(sport => <Batting 
                    key={sport.id}
                    sport = {sport}
                    handleAddToCart ={handleAddToCart}
                    ></Batting>)  
                }
           </div>
           <div className="my-content-container">
                <Cart cart={cart}></Cart>

           </div>
        </div>
    );
};

export default Sport;