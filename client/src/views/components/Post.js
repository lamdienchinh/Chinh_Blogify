import React from 'react';
import '../../public/css/Post.css';


function Post(props) {
    return (
        <div className={`post-wrapper`}>
            <div className='post-user'>
                <div className='post-user-avt'>
                </div>
                <div className='post-user-name-time'>
                    <div className='post-user-name'>
                        {/* {blog.author.username} */}
                    </div>
                    <div className='post-user-time'>
                        {/* {blog.time} */}
                    </div>
                </div>
            </div>
            <div className='post-title'>
                {/* {blog.title} */}
            </div>
            <div className='post-content'>

            </div>
        </div>
    )
}
export default Post