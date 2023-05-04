import '../../public/css/Register.css'
import React, { useState, useEffect } from "react";
import { createAxios } from '../../createInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/authSlice';
import { createTutorPost } from '../../redux/apiRequest'
import { provinces, list_subjects } from '../../public/js/index'
import Select from 'react-select'
import "../../public/css/RegisterTutor.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterTutor = () => {
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
    const [fullname, setFullname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDoB] = useState("");
    const [address, setAddress] = useState("");
    const [summary, setSummary] = useState("");
    const [gender, setGender] = useState("");
    const [job, setJob] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [file, setFile] = useState(null);
    function handleSubjects(selectedOptions) {
        setSubjects(selectedOptions);
    }
    const handleChange = (event) => {
        setSelectedProvince(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        let list_subject = subjects.map((item) => item.value);
        let form = {
            phonenumber: phonenumber,
            email: email,
            province: selectedProvince,
            fullname: fullname,
            subjects: list_subject,
            summary: summary,
            gender: gender,
            job: job,
            dob: dob,
            address: address,
            img: file
        }
        let formData = new FormData();
        formData.append('phonenumber', form.phonenumber);
        formData.append('email', form.email);
        formData.append('province', form.province);
        formData.append('fullname', form.fullname);
        formData.append('subjects', form.subjects);
        formData.append('summary', form.summary);
        formData.append('gender', form.gender);
        formData.append('job', form.job);
        formData.append('dob', form.dob);
        formData.append('address', form.address);
        formData.append('img', form.img);
        if (user?.accessToken) {
            await createTutorPost(user?.accessToken, dispatch, axiosJWT, formData)
            toast("Bạn đã tạo bài thành công")
        }
    }
    return (
        <div className="registertutor">
            <ToastContainer />
            <form className="registertutor-form" onSubmit={handleSubmit}>
                <div className="regis-tutor res-h1">
                    Thông tin cá nhân
                </div>
                <div className="registertutoritem reg1">
                    <label>
                        Họ và tên
                    </label>
                    <input type="text" className="tutor-name" onChange={(event) => setFullname(event.target.value)} />
                </div>
                <div className="registertutoritem reg2">
                    <label>
                        Số điện thoại
                    </label>
                    <input type="text" className="tutor-phonenumber" onChange={(event) => setPhonenumber(event.target.value)} />
                </div>
                <div className="registertutoritem reg3">
                    <label>
                        Địa chỉ email
                    </label>
                    <input type="text" className="tutor-email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="registertutoritem reg4">
                    <label>
                        Giới tính
                    </label>
                    <select value={gender} onChange={(event) => setGender(event.target.value)}>
                        <option value="" disabled>Chọn giới tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                </div>
                <div className="registertutoritem reg5">
                    <label>
                        Năm sinh
                    </label>
                    <input type="text" className="tutor-dob" onChange={(event) => setDoB(event.target.value)} />
                </div>
                <div className="registertutoritem reg6">
                    <label>
                        Địa chỉ
                    </label>
                    <input type="text" className="tutor-address" onChange={(event) => setAddress(event.target.value)} />
                </div>
                <div className="regis-tutor res-h2">
                    Thông tin gia sư
                </div>
                <div className="registertutoritem reg7">
                    <label>
                        Giới thiệu bản thân
                    </label>
                    <input type="text" className="tutor-summary" onChange={(event) => setSummary(event.target.value)} />
                </div>
                <div className="registertutoritem reg8">
                    <label>
                        Bạn đang là
                    </label>
                    <select value={job} onChange={(event) => setJob(event.target.value)}>
                        <option value="" disabled>Chọn vai trò hiện tại</option>
                        <option value="Sinh viên">Sinh viên</option>
                        <option value="Giáo viên">Giáo viên</option>
                        <option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
                    </select>
                </div>
                <div className="registertutoritem reg9">
                    <label>
                        Khu vực đang ở
                    </label>
                    <select value={selectedProvince} onChange={handleChange}>
                        <option value="" disabled>--Chọn tỉnh thành--</option>
                        {provinces.map((province) => (
                            <option key={province} value={province}>
                                {province}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="registertutoritem reg10">
                    <label>
                        Môn dạy
                    </label>
                    <Select
                        isMulti
                        options={list_subjects}
                        value={subjects}
                        onChange={handleSubjects}
                    />
                </div>
                <div className="registertutoritem reg11">
                    <label>
                        Ảnh
                    </label>
                    <input type='file' onChange={(event) => setFile(event.target.files[0])}></input>
                </div>
                <button className="reg-tutor-btn" type='submit'>Đăng ký</button>
            </form>
        </div>
    )
}
export default RegisterTutor