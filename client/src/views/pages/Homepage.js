import React from 'react';
import { useState } from 'react';
import '../../public/css/Homepage.css';
import { FaSearch } from 'react-icons/fa';
import Post from '../components/Post'
function Homepage() {
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