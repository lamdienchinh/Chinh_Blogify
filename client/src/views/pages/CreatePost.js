import React, { useState, useEffect } from 'react';
import '../../public/css/CreatePost.css'
import Button from 'react-bootstrap/Button'
import { createAxios } from '../../createInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/authSlice';
import { createPost } from '../../redux/apiRequest'
import { provinces, list_subjects } from '../../public/js/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PostEditor = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [])
    const [selectedProvince, setSelectedProvince] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [studentgender, setStudentgender] = useState("");
    const [summary, setSummary] = useState("")
    const [date, setDate] = useState("");
    const [studentnum, setStudentnum] = useState("");
    const [subject, setSubject] = useState("");

    const [tutorgender, setTutorgender] = useState("");
    const [salary, setSalary] = useState("");
    const [numsessions, setNumsessions] = useState(1);
    const [differ, setDiffer] = useState("");
    const handleChange = (event) => {
        setSelectedProvince(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        let form = {
            phonenumber: phonenumber,
            studentgender: studentgender,
            province: selectedProvince,
            studentnum: studentnum,
            subject: subject,
            datestart: date,
            summary: summary,
            tutorgender: tutorgender,
            salary: salary,
            numsessions: numsessions,
            differ: differ
        }
        if (user?.accessToken) {
            console.log(form)
            let b = await createPost(user?.accessToken, dispatch, axiosJWT, form)
            toast("Bạn đã tạo bài thành công")
        }
    }
    return (
        <div className="createpost-wrapper">
            <ToastContainer />
            <h1>Mô tả yêu cầu gia sư cần tìm</h1>
            <form className='createpost' onSubmit={handleSubmit}>
                <div className="form-item item1">
                    <label>
                        Số điện thoại liên hệ
                    </label>
                    <input type="text" className="phonenumber" onChange={(event) => setPhonenumber(event.target.value)} />
                </div>
                <div className="form-item item2">
                    <label>
                        Giới tính học viên
                    </label>
                    <select value={studentgender} onChange={(event) => setStudentgender(event.target.value)}>
                        <option value="" disabled>Chọn giới tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Cả hai">Cả hai</option>
                    </select>
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
                    <input type="number" className="student-number" onChange={(event) => setStudentnum(event.target.value)} />
                </div>
                <div className="form-item item5">
                    <label>
                        Ngày bắt đầu
                    </label>
                    <input type="date" className="date-start" onChange={(event) => setDate(event.target.value)} />
                </div>
                <div className="form-item item6">
                    <label>
                        Môn học
                    </label>
                    <select value={subject} onChange={(event) => setSubject(event.target.value)}>
                        <option value="" disabled>--Chọn môn học--</option>
                        {list_subjects.map((item) => (
                            <option key={item.label} value={item.label}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-item item7"><label>
                    Tóm tắt yêu cầu
                </label>
                    <input type="text" className="summary" onChange={(event) => setSummary(event.target.value)} />
                </div>
                <div className="form-item item8">
                    <h1>Yêu cầu gia sư</h1>
                </div>
                <div className="form-item item9">
                    <label>
                        Giới tính gia sư
                    </label>
                    <select value={tutorgender} onChange={(event) => setTutorgender(event.target.value)}>
                        <option value="" disabled>Chọn giới tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Nam hoặc Nữ">Nam hoặc Nữ</option>
                    </select>
                </div>
                <div className="form-item item10">
                    <label>
                        Học phí (vnđ) / buổi
                    </label>
                    <input type="text" className="salary" onChange={(event) => setSalary(event.target.value)} />
                </div>
                <div className="form-item item11">
                    <label>
                        Số buổi/tuần
                    </label>
                    <input type="number" className="class-sessions" onChange={(event) => setNumsessions(event.target.value)} />
                </div>
                <div className="form-item item12">
                    <label>
                        Mô tả khác
                    </label>
                    <input type="text" className="differ-summary" onChange={(event) => setDiffer(event.target.value)} />
                </div>
            </form>
            <div className="createpost-btn-wrapper">
                <Button className="createpost-btn" variant="primary" onClick={handleSubmit}>Tạo tìm kiếm</Button>
            </div>
        </div >
    )
}
export default PostEditor;