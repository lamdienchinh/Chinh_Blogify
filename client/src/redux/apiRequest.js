import axios from "axios"
import {
    loginFailed, loginStart, loginSuccess, registerStart, registerSuccess, registerFailed, logoutFailed, logoutStart, logoutSuccess, 
    changeAvatarStart, changeAvatarSuccess, changeAvatarFailed, changeInforStart, changeInforSuccess, changeInforFailed
} from "./authSlice"
import { getUsersStart, getUsersFailed, getUsersSuccess } from "./userSlice"
import { getPostsStart, getPostsSuccess, getPostsFailed, createPostStart, createPostSuccess, createPostFailed } from "./postSlice"
import { getTutorsStart, getTutorsSuccess, getTutorsFailed, createTutorStart, createTutorSuccess, createTutorFailed } from "./tutorSlice"
export const login = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("/v1/auth/login", user)
        dispatch(loginSuccess(res.data))
        navigate("/home")
    }
    catch (err) {
        dispatch(loginFailed())
        alert("Đăng nhập thất bại")
    }
}
export const register = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post("/v1/auth/register", user)
        dispatch(registerSuccess())
        navigate("/")
    }
    catch (err) {
        dispatch(registerFailed())
        alert("Đăng ký thất bại")
    }
}

export const getAllUsers = async (token, dispatch, axiosJWT) => {
    dispatch(getUsersStart());
    try {
        const res = await axiosJWT.get("/v1/user/", {
            headers: { token: `Bearer ${token}` },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailed());
    }
};

export const getAllPosts = async (token, dispatch, axiosJWT) => {
    dispatch(getPostsStart());
    try {
        const res = await axiosJWT.get("/v1/post", {
            headers: { token: `Bearer ${token}` },
        });
        dispatch(getPostsSuccess(res.data));
    } catch (err) {
        dispatch(getPostsFailed());
    }
};

export const createPost = async (token, dispatch, axiosJWT, newpost) => {
    dispatch(createPostStart());
    try {
        const res = await axiosJWT.post(`/v1/post`, newpost, {
            headers: { token: `Bearer ${token}` },
        })
        console.log(res)
        dispatch(createPostSuccess(res.data))
    }
    catch (err) {
        dispatch(createPostFailed())
        console.log(err)
    }
}

export const logout = async (token, dispatch, axiosJWT, navigate) => {
    dispatch(logoutStart())
    try {
        console.log(token)
        await axiosJWT.post('/v1/auth/logout', {
            headers: { token: `Bearer ${token}` },
        })
        dispatch(logoutSuccess())
        navigate('/')
    } catch (err) {
        dispatch(logoutFailed())
    }
}

export const getTutorPosts = async (token, dispatch, axiosJWT) => {
    dispatch(getTutorsStart());
    try {
        const res = await axiosJWT.get("/v1/tutor", {
            headers: { token: `Bearer ${token}` },
        });
        dispatch(getTutorsSuccess(res.data));
    } catch (err) {
        dispatch(getTutorsFailed());
    }
};

export const createTutorPost = async (token, dispatch, axiosJWT, newpost) => {
    dispatch(createTutorStart());
    try {
        const res = await axiosJWT.post(`/v1/tutor`, newpost, {
            headers: {
                token: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
        })
        console.log(res)
        dispatch(createTutorSuccess())
    }
    catch (err) {
        dispatch(createTutorFailed())
    }
}

export const changeavatar = async (token, dispatch, axiosJWT, newavatar) => {
    dispatch(changeAvatarStart());
    try {
        const res = await axiosJWT.put(`/v1/user/changeavatar`, newavatar, {
            headers: {
                token: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
        })
        dispatch(changeAvatarSuccess(res.data))
        alert("Đổi avatar thành công")
    }
    catch (err) {
        dispatch(changeAvatarFailed())
        alert("Đổi avatar thất bại")
    }
}

export const changeinfor = async (token, dispatch, axiosJWT, newinfor) => {
    dispatch(changeInforStart());
    try {
        const res = await axiosJWT.put(`/v1/user/changeinfor`, newinfor, {
            headers: {
                token: `Bearer ${token}`
            },
        })
        dispatch(changeInforSuccess(res.data))
        alert("Đổi thông tin thành công")
    }
    catch (err) {
        dispatch(changeInforFailed())
        alert("Đổi thông tin thất bại")
    }
}
export const changepass = async (token, dispatch, axiosJWT, newinfor) => {
    try {
        const res = await axiosJWT.put(`/v1/user/changepass`, newinfor, {
            headers: {
                token: `Bearer ${token}`
            },
        })
        alert("Đổi password thành công")
        console.log(res)
    }
    catch (err) {
        dispatch(changeInforFailed())
        alert("Đổi password thất bại")
    }
}