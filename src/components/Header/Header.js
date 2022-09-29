import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (

            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                   <h1 className="text-3xl font-bold text-blue-600">Fantasy League Cricket Club</h1>                   
                </div>
                
            </nav>
            

    );
};

export default Header;