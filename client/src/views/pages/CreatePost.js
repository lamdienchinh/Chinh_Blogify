import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../public/css/CreatePost.css'
import Navbar from '../components/Navbar';
function BlogEditor() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    return (
        <div className="createpost-wrapper">
            <Navbar>
            </Navbar>
            <h1>Text Editor</h1>
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
            />
        </div>
    )
}
export default BlogEditor;