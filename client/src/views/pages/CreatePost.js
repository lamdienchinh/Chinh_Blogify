import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../public/css/CreatePost.css'
import Button from 'react-bootstrap/Button'
import Navbar from '../components/Navbar';
import { createAxios } from '../../createInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/authSlice';
import { createPost } from '../../redux/apiRequest'
const BlogEditor = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [title, setTitle] = useState("Bài viết mới")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    const handleSave = () => {
        const contentState = editorState.getCurrentContent();
        const rawState = convertToRaw(contentState);
        let newpost = {
            title: title,
            content: rawState,
            time: Date.now(),
            user_id: user._id
        }
        if (user?.accessToken) {
            createPost(user?.accessToken, dispatch, axiosJWT, newpost)
        }
    }

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [])
    return (
        <div className="createpost-wrapper">
            <Navbar>
            </Navbar>
            <h1>Text Editor</h1>
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
            />
            <Button className="createpost-btn" variant="primary" onClick={handleSave}></Button>
        </div>
    )
}
export default BlogEditor;