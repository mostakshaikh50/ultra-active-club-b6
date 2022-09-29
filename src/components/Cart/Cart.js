import React, { useState } from 'react';
import myPic from '../../images/mostak.jpg'
import Toastify from '../Toastify/Toastify';
import './Cart.css'

const Cart = (props) => {
    
    const { cart } = props;
    
    if(!localStorage.getItem("breakTimeStorage")){
        localStorage.setItem("breakTimeStorage", 0);
    }
    
   let totalTime = 0;
   for(const requiredTime of cart){
       totalTime = totalTime + requiredTime.time;
       
   }


   const [message, setMessage] = useState('');
 
   const handleClick = event => {
   
     setMessage(event.target.value);
     
     localStorage.setItem("breakTimeStorage", event.target.value);
   };









    return (
        <div className='cart'>
                 
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
                        <button value="10" onClick={handleClick}>10<span>S</span></button>
                        <button value="20" onClick={handleClick}>20<span>S</span></button>
                        <button value="30" onClick={handleClick}>30<span>S</span></button>
                        <button value="40" onClick={handleClick}>40<span>S</span></button>
                        <button value="50" onClick={handleClick}>50<span>S</span></button>
                        
                        </div>                     
                </div>

                <div className=''>
                    <p className='break-title'>Exercise Details</p>
                    <div className='exercise-details'>
                       
                        <p>Exercise Time : {totalTime} <span>Sec</span></p>
                        
                        <p>Break Time : {localStorage.getItem("breakTimeStorage")}</p>
                    </div>
                    
                </div>

                <div>                  
                    <Toastify></Toastify>
                </div>
        </div>
    );
};

export default Cart;