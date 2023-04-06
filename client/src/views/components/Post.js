import React from 'react';
import '../../public/css/Post.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Post(props) {
    const blog = props.post
    let strjson = props.post.content
    console.log('Type là' + typeof(strjson))
    // console.log(json)
    const html = draftToHtml(strjson);
    console.log(html)
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
                <div dangerouslySetInnerHTML={{ __html: html }} />;
            </div>
        </div>
    )
}
export default Post