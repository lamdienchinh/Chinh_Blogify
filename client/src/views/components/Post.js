import React from 'react';
import '../../public/css/Post.css';
function Post(props) {
    return (
        <div className='post-wrapper'>
            <div className='post-user'>
                <div className='post-user-avt'>
                </div>
                <div className='post-user-name-time'>
                    <div className='post-user-name'>
                        So Hyang Việt Nam - 우리 사랑하는 소향
                    </div>
                    <div className='post-user-time'>
                        3 hours
                    </div>
                </div>
            </div>
            <div className='post-title'>
                Xin chào
            </div>
            <div className='post-content'>
                Hello
            </div>
        </div>
    )
}
export default Post