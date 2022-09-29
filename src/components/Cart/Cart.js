import React from 'react';
import myPic from '../../images/mostak.jpg'

const Cart = (props) => {
    console.log(props)
    return (
        <div>
            
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
    );
};

export default Cart;