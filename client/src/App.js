import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/pages/Login'
import Register from './views/pages/Register'
import UserLayout from './views/layouts/UserLayout'
import BlogEditor from './views/pages/CreatePost';
import Homepage from './views/pages/Homepage';
import Profile from './views/pages/Profile';
import RegisterTutor from './views/pages/RegisterTutor';
function App() {
  return (
    <div className='wrap'>
      <Router>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route element={<UserLayout></UserLayout>}>
            <Route path="/createpost" element={<BlogEditor></BlogEditor>} />
            <Route path="/register-tutor" element={<RegisterTutor></RegisterTutor>} />
            <Route path="/home" element={<Homepage></Homepage>} />
            <Route path="/profile" element={<Profile></Profile>} />
            <Route path="." element={<></>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
