import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../public/css/Homepage.css';
import { FaSearch } from 'react-icons/fa';
import Post from '../components/Post'
import { getAllPosts } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/authSlice';
import { createAxios } from "../../createInstance";
import ReactPaginate from 'react-paginate';

const Homepage = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const blogs = useSelector((state) => state.posts.posts?.allPosts)
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
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const itemsPerPage = 10;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = blogs.slice(startIndex, endIndex);
    console.log(currentItems)
    console.log(blogs)
    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    console.log(totalPages)
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
                {currentItems.map(post => (
                    <Post key={post._id} post={post}></Post>
                ))}
            </div>
            <div className="post-paginate">
                <ReactPaginate
                    pageCount={totalPages}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div >

    )
}

export default Homepage;