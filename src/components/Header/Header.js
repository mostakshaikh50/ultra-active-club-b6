import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (

            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                   <h1 className="font-bold text-blue-600">Fantasy League Cricket Club</h1>                   
                </div>
                
            </nav>
            










        // <div className=''>
        //    <h1 class="text-3xl font-bold text-blue-600">Fantasy League Cricket Club</h1> 
        // </div>

        // <div class="grid grid-cols-2 gap-8 ml-5 mt-5 mb-10">
           
        //      <div class="grid grid-cols-3 gap-3">                 
        //         <h1 class="text-blue-600">Fantasy League </h1>
        //         <h1 class="text-blue-600">Fantasy League </h1>
        //         <h1 class=" text-blue-600">Fantasy League </h1>
        //         <h1 class="text-blue-600">Fantasy League </h1>
        //         <h1 class="text-blue-600">Fantasy League </h1>
        //         <h1 class="text-blue-600">Fantasy League </h1>
                
        //      </div>

        //      <div class="grid grid-cols-1 gap-4">
        //         <h1 class="text-blue-600">Fantasy League </h1>
        //         <h1 class="text-blue-600">Fantasy League </h1>
        //         <h1 class="text-blue-600">Fantasy League </h1>
                
        //      </div>
             
        // </div>
       
        
    );
};

export default Header;