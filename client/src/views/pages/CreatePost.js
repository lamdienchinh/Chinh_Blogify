import React, { useState, useEffect } from 'react';
import '../../public/css/CreatePost.css'
import Button from 'react-bootstrap/Button'
import Navbar from '../components/Navbar';
import { createAxios } from '../../createInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/authSlice';
import { createPost } from '../../redux/apiRequest'
import { provinces } from '../../public/js/index'
const PostEditor = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    const handleSave = () => {
        let newpost = {

            time: Date.now(),
            user_id: user._id
        }
        if (user?.accessToken) {
            console.log(newpost)
            // createPost(user?.accessToken, dispatch, axiosJWT, newpost)
        }
    }

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [])
    const [selectedProvince, setSelectedProvince] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [summary, setSummary] = useState("")
    const handleChange = (event) => {
        setSelectedProvince(event.target.value);
    };
    return (
        <div className="createpost-wrapper">
            <Navbar>
            </Navbar>
            <h1>Mô tả yêu cầu gia sư cần tìm</h1>
            <form className='createpost'>
                <div className="form-item item1">
                    <label>
                        Số điện thoại liên hệ
                    </label>
                    <input type="text" className="phonenumber" />
                </div>
                <div className="form-item item2">
                    <label>
                        Tóm tắt yêu cầu
                    </label>
                    <input type="text" className="summary" />
                </div>
                <div className="form-item item3">
                    <label>
                        Địa điểm dạy
                    </label>
                    <select value={selectedProvince} onChange={handleChange}>
                        <option value="">--Chọn tỉnh thành--</option>
                        {provinces.map((province) => (
                            <option key={province} value={province}>
                                {province}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-item item4">
                    <label>
                        Số học viên
                    </label>
                    <input type="text" className="student-number" />
                </div>
                <div className="form-item item5">
                    <label>
                        Ngày bắt đầu
                    </label>
                    <input type="date" className="date-start" />
                </div>
                <div className="form-item item6">
                    <label>
                        Môn học
                    </label>
                    <input type="text" className="subject" />
                </div>
                <div className="form-item item7"><label>
                    Giới tính học viên
                </label>
                    <input type="text" className="gender" /></div>
                <div className="form-item item8">
                    <h1>Yêu cầu gia sư</h1>
                </div>
                <div className="form-item item9">
                    <label>
                        Giới tính gia sư
                    </label>
                    <input type="text" className="tutor-gender" />
                </div>
                <div className="form-item item10">
                    <label>
                        Học phí (vnđ)
                    </label>
                    <input type="text" className="salary" />
                </div>
                <div className="form-item item11">
                    <label>
                        Số buổi/tuần
                    </label>
                    <input type="text" className="class-sessions" />
                </div>
                <div className="form-item item12">
                    <label>
                        Mô tả khác
                    </label>
                    <input type="text" className="differ-summary" />
                </div>
            </form>
            <div className="createpost-btn-wrapper">
                <Button className="createpost-btn" variant="primary" onClick={handleSave}>Tạo tìm kiếm</Button>
            </div>
        </div >
    )
}
export default PostEditor;