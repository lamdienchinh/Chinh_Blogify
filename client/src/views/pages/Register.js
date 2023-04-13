import '../../public/css/Register.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/apiRequest'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
const Register = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
            email: email
        }
        register(newUser, dispatch, navigate);
    };
    return (
        <div className='register'>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign up</h2>
                            <div className="box-name">
                                <div className="inputbox">
                                    <input type="text" onChange={(event) => setFirstname(event.target.value)} />
                                    <label >First Name</label>
                                </div>
                                <div className="inputbox">
                                    <input type="text" onChange={(event) => setLastname(event.target.value)} />
                                    <label >Lastname</label>
                                </div>
                            </div>
                            <div className="inputbox">
                                <input type="text" onChange={(event) => setEmail(event.target.value)} />
                                <label>Email</label>
                            </div>
                            <div className="inputbox">
                                <input type="text" onChange={(event) => setUsername(event.target.value)} />
                                <label>Username</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" onChange={(event) => setPassword(event.target.value)} />
                                <label >Password</label>
                            </div>
                            <div className="register-block-btns">
                                <button type="submit" className="sign-up">Sign up</button>
                            </div>
                            <Link to="/" className="return-login"> Had an account</Link>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Register;