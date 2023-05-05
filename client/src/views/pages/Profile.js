import "../../public/css/User.css"
import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { TextField, Button, Avatar, Input } from '@mui/material';
import { createAxios } from '../../createInstance';
import { loginSuccess } from '../../redux/authSlice';
import { changeavatar, changeinfor, changepass } from "../../redux/apiRequest";
function User() {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const [firstname, setFirstname] = useState(user?.firstname);
    const [lastname, setLastname] = useState(user?.lastname);
    const [email, setEmail] = useState(user?.email);
    const [phonenumber, setPhonenumber] = useState(user?.phonenumber);
    const [oldpassword, setOldpassword] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [avatar, setAvatar] = useState(user?.img);
    const [avatarchange, setAvatarchange] = useState(user?.img);
    const form1Ref = useRef(null);
    const form2Ref = useRef(null);
    const form3Ref = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    const handleSubmit1 = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("img",avatar);
        console.log("img", avatar)
        changeavatar(user?.accessToken, dispatch, axiosJWT, formData);
    };
    const handleSubmit2 = async (event) => {
        event.preventDefault();
        let data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber
        }
        changeinfor(user?.accessToken, dispatch, axiosJWT, data);
    };
    const handleSubmit3 = async (event) => {
        event.preventDefault();
        let data = {
            oldpass: oldpassword,
            newpass: newpassword
        }
        changepass(user?.accessToken, dispatch, axiosJWT, data)
    };
    const handleFileChange = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setAvatar(file);
        setAvatarchange(URL.createObjectURL(file))
    };
    return (
        <div className='user-wrapper'>
            <div className='user-field1'>
                <Avatar className="avatar" alt="Remy Sharp" src={avatarchange} sx={{ width: 200, height: 200 }} style={{ border: 0 }} />
                <div className="avatar-wrapper">
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </div>
                <form ref={form1Ref} onSubmit={handleSubmit1}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Change avatar
                    </Button>
                </form>
            </div>
            <div className='user-field2'>
                <form ref={form2Ref} onSubmit={handleSubmit2}>
                    <TextField
                        id="firstname"
                        label="Firstname"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        id="lastname"
                        label="Lastname"
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        id="phonenumber"
                        label="Phonenumber"
                        type="text"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Change information
                    </Button>
                </form>
            </div>
            <div className='user-field3'>
                <form ref={form3Ref} onSubmit={handleSubmit3}>
                    <TextField
                        id="oldpassword"
                        label="Old password"
                        type="password"
                        value={oldpassword}
                        onChange={(e) => setOldpassword(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        id="newpassword"
                        label="New password"
                        type="password"
                        value={newpassword}
                        onChange={(e) => setNewpassword(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Change password
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default User;