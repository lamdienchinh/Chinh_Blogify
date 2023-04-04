import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/css/Navbar.css'
import { AiOutlineHome, AiOutlineProfile, AiOutlinePoweroff } from 'react-icons/ai'
function Navbar() {
    return (
        <div className='Navbar-wrapper'>
            <div className='Navbar-item1'>
                <NavLink className={({ isActive, isPending }) => isPending ? "navlink" : isActive ? "navlink-selected" : "navlink"} to='/home' >
                    <div className='navlink-button navlink-home'>
                        <AiOutlineHome className='nav-icon home-icon'></AiOutlineHome>
                        <div>Home</div>
                    </div>
                </NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "navlink" : isActive ? "navlink-selected" : "navlink"} to='/profile' >
                    <div className='navlink-button navlink-profile'>
                        <AiOutlineProfile className='nav-icon profile-icon'></AiOutlineProfile>
                        <div>Profile</div>
                    </div>
                </NavLink>
            </div>
            <div className='Navbar-item2'>
                <div className='navlink-button navlink-profile'>
                    <AiOutlinePoweroff className='nav-icon out-icon'></AiOutlinePoweroff>
                    <div>Logout</div>
                </div>
            </div>
        </div>
    )

}
export default Navbar