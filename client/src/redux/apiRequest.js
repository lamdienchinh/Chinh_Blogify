import axios from "axios"
import {
    loginFailed, loginStart, loginSuccess, registerStart, registerSuccess, registerFailed, logoutFailed, logoutStart, logoutSuccess,
} from "./authSlice"
import { getUsersStart, getUsersFailed, getUsersSuccess } from "./userSlice"
import { getPostsStart, getPostsSuccess, getPostsFailed, createPostStart, createPostSuccess, createPostFailed } from "./postSlice"
export const login = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("/v1/auth/login", user)
        dispatch(loginSuccess(res.data))
        navigate("/home")
    }
    catch (err) {
        dispatch(loginFailed())
    }
}
export const register = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        const res = await axios.post("/v1/auth/register", user)
        dispatch(registerSuccess())
        navigate("/")
    }
    catch (err) {
        dispatch(registerFailed())
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
        const res = await axiosJWT.post("/v1/post", newpost, {
            headers: { token: `Bearer ${token}` },
        })
        dispatch(createPostSuccess())
    }
    catch (err) {
        dispatch(createPostFailed())
    }
}

export const logout = async (token, dispatch, axiosJWT, navigate) => {
    dispatch(logoutStart())
    try {
        console.log(token)
        // const logout = await axios.post('/v1/auth/logout', {
        //     withCredentials: true,
        // })
        const logout = await axiosJWT.post('/v1/auth/logout', {
            headers: { token: `Bearer ${token}` },
        })
        dispatch(logoutSuccess())
        navigate('/')
    } catch (err) {
        dispatch(logoutFailed())
    }
}