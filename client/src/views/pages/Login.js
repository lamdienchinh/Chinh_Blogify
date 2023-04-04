import '../../public/css/Login.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {login} from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch =useDispatch();
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
            username: username,
            password: password
        }
        login(newUser, dispatch, navigate)
    };
    return (
        <div className='login'>
            <section>
                <div className="form-loginbox">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="inputbox">
                                <input type="text" onChange={(event) => setUsername(event.target.value)} />
                                <label>Email</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" onChange={(event) => setPassword(event.target.value)} />
                                <label>Password</label>
                            </div>
                            <button type="submit" className='login-button'>Log in</button>
                            <div className="register-place">
                                <p>Don't have an account <a href="/register">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login;