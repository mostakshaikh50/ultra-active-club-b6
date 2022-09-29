import React from 'react';
import myPic from '../../images/mostak.jpg'
import './Cart.css'

const Cart = (props) => {
    
    const { cart } = props;

   let totalTime = 0;
   for(const requiredTime of cart){
       totalTime = totalTime + requiredTime.time;
       
   }
   
   const handleClick =( event) => {
    
    const theValue = event.currentTarget.value;
    console.log("the value:", theValue);
    const theText = event.currentTarget.textContent;
    console.log("the text: ", theText);
   };


    return (
        <div className='cart'>
                 <p>selected item: {cart.length}</p>
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
                    
                        {/* <button className='break-time'> */}
                        <div className='break-time'>
                        <button onClick={handleClick}>10<span>S</span></button>
                        <button onClick={handleClick}>20<span>S</span></button>
                        <button onClick={handleClick}>30<span>S</span></button>
                        <button onClick={handleClick}>40<span>S</span></button>
                        <button onClick={handleClick}>50<span>S</span></button>
                        {/* <button value="this is the value" onClick={handleClick}>60</button> */}
                        </div>                     
                        
                     
                </div>

                <div className=''>
                    <p className='break-title'>Exercise Details</p>
                    <div className='exercise-details'>
                       
                        <p>Exercise Time : {totalTime} <span>Sec</span></p>
                        
                        <p>Break Time : {}</p>
                    </div>
                    
                </div>
        </div>
    );
};

export default Cart;