import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <a href="#">Logo</a>
                    </div>
                    <input type="checkbox" id='nav-check' />
                    <label for="nav-check" className='nav-toggler'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ico" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </label>
                    <div className="nav">
                        <ul>
                            <li> <a href="#">Home</a></li>
                            <li> <a href="#">About</a></li>
                            <li> <a href="#">Products</a></li>
                            <li> <a href="#">Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;