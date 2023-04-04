import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../public/css/Homepage.css';
import { FaSearch } from 'react-icons/fa';
import Post from '../components/Post'
import { getAllUsers } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { loginSuccess } from '../../redux/authSlice';
import {createAxios} from "../../createInstance"
const Homepage = () => {
    const user = useSelector((state)=> state.auth.login?.currentUser)
    const userlist = useSelector((state)=> state.users.users?.allUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    const refreshToken = async ()=>{
        try {
            const res = await axios.post("/v1/auth/refresh",{
                withCredentials: true
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    axiosJWT.interceptors.request.use(
        async(config) => {
            const decodedToken = jwt_decode(user?.accessToken)
            let date = new Date()
            if (decodedToken.exp < date.getTime()/1000) {
                const data =await refreshToken()
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken
                }
                dispatch(loginSuccess(refreshUser))
                config.headers['token'] = "Bearer "+data.accessToken
            }
            return config;
        }, (err) => {
            return Promise.reject(err)
        }
    )
    useEffect(()=>{
        if (!user) {
            navigate("/")
        }
        if (user?.accessToken) {
            getAllUsers(user?.accessToken, dispatch, axiosJWT)
        }
    }, [])
    const [inputsearch, setInputSearch] = useState("");
    return (
        <div className='home-wrapper'>
            <div className='search-wrapper'>
                <input className='search-input' onChange={(event) => setInputSearch(event.target.value)}></input>
                <div className='search-btn-wrap'>
                    <button type='submit' className='search-btn'>
                        <FaSearch></FaSearch>
                    </button>
                </div>
            </div>
            <div className='posts-wrapper'>
                <div className='post-list'>
                    <Post></Post>
                </div>
            </div>
        </div>
    )
}

export default Homepage;