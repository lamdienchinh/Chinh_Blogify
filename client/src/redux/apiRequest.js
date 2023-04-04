import axios from "axios"
import { loginFailed, loginStart, loginSuccess, registerStart, registerSuccess, registerFailed } from "./authSlice"
import { getUsersStart, getUsersFailed, getUsersSuccess } from "./userSlice"
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