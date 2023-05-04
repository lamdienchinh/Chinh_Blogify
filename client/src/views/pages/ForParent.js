import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../public/css/Homepage.css';
import { FaSearch } from 'react-icons/fa';
import TutorPost from '../components/TutorPost'
import { getTutorPosts } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/authSlice';
import { createAxios } from "../../createInstance";
import ReactPaginate from 'react-paginate';

const ParentPage = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const blogs = useSelector((state) => state.tutors.posts?.allPosts)
    let blog_list = [];
    if (blogs) {
        blog_list = blogs.slice().reverse()
    }
    // const userlist = useSelector((state)=> state.users.users?.allUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
        if (user?.accessToken) {
            getTutorPosts(user?.accessToken, dispatch, axiosJWT)
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
    let currentItems =[];
    let totalPages;
    if (blogs) {
        currentItems = blog_list.slice(startIndex, endIndex);
        totalPages = Math.ceil(blog_list.length / itemsPerPage);
    }
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
                {currentItems && currentItems.map(post => (
                    <TutorPost key={post._id} post={post}></TutorPost>
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

export default ParentPage;