import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../public/css/Homepage.css';
import { FaSearch } from 'react-icons/fa';
import Post from '../components/Post'
import { getAllPosts } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/authSlice';
import { createAxios } from "../../createInstance"
const Homepage = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const blogs = useSelector((state) => state.posts.posts?.allPosts)
    console.log(blogs)
    // const userlist = useSelector((state)=> state.users.users?.allUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
        if (user?.accessToken) {
            getAllPosts(user?.accessToken, dispatch, axiosJWT)
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
                {console.log(blogs)}
                <div className='post-list'>
                    {
                        blogs.map((post) => {
                            return (
                                <Post key={post._id} post={post}></Post>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage;