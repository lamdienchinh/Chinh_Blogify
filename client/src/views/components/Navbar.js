import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/css/Navbar.css'
import { AiOutlineHome, AiOutlineProfile, AiOutlinePoweroff } from 'react-icons/ai'
import { createAxios } from '../../createInstance';
import { logoutSuccess } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/apiRequest';
function Navbar() {
    const user = useSelector((state) =>
        state.auth.login.currentUser
    )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    const handleLogout = () => {
        if (window.confirm('Are you sure')) { logout(user?.accessToken, dispatch, axiosJWT, navigate) }
    }
    return (
        <div className='Navbar-wrapper'>
            <div className='Navbar-item1'>
                <NavLink className={({ isActive, isPending }) => isPending ? "navlink" : isActive ? "navlink-selected" : "navlink"} to='/home' >
                    <div className='navlink-button navlink-home'>
                        <AiOutlineHome className='nav-icon home-icon'></AiOutlineHome>
                        <div>Dành cho gia sư</div>
                    </div>
                </NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "navlink" : isActive ? "navlink-selected" : "navlink"} to='/createpost' >
                    <div className='navlink-button navlink-profile'>
                        <AiOutlineProfile className='nav-icon profile-icon'></AiOutlineProfile>
                        <div>Tìm gia sư</div>
                    </div>
                </NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "navlink" : isActive ? "navlink-selected" : "navlink"} to='/register-tutor' >
                    <div className='navlink-button navlink-profile'>
                        <AiOutlineProfile className='nav-icon profile-icon'></AiOutlineProfile>
                        <div>Đăng ký làm gia sư</div>
                    </div>
                </NavLink>
            </div>
            <div className='Navbar-item2'>
                <NavLink className={({ isActive, isPending }) => isPending ? "navlink" : isActive ? "navlink-selected" : "navlink"} to='/profile' >
                    <div className='navlink-button navlink-avt'>
                        Hello {(user) ? user.username : ""}
                    </div>
                </NavLink>
                <div className='navlink-button navlink-logout' onClick={handleLogout}>
                    <AiOutlinePoweroff className='nav-icon out-icon'></AiOutlinePoweroff>
                    <div>Logout</div>
                </div>
            </div>
        </div>
    )

}
export default Navbar