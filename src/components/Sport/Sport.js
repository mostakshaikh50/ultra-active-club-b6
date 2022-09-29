import React, { useEffect, useState } from 'react';
import Batting from '../Batting/Batting';
import './Sport.css'
import myPic from '../../images/mostak.jpg'

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
                
                <div className='my-data'>
                    <div><img src={myPic} alt=""/></div>
                    
                    <div>
                        <p className='my-name'>Md Mostak Shaikh</p>
                        <p className='my-location'>London, UK</p>
                    </div>
                    
                                        
                </div>
                <div className='my-info'>
                        <div>
                            <p>70kg</p>
                            <p>Weight</p>
                        </div>
                        <div>
                            <p>5.9</p>
                            <p>Height</p>
                        </div>
                        <div>
                             <p>29yrs</p>
                             <p>Age</p>
                        </div>                        
                         
                    </div>

                <div className='add-break'>
                    <p className='break-title'>Add A Break</p>
                     <div className='break-time'>
                        <p>10s</p>
                        <p>20s</p>
                        <p>30s</p>
                        <p>40s</p>
                     </div>
                </div>

           </div>
        </div>
    );
};

export default Sport;