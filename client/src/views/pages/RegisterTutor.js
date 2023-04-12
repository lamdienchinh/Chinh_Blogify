import '../../public/css/Register.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/apiRequest'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import "../../public/css/RegisterTutor.css"
import { provinces, list_subjects } from "../../public/js/index"
import Select from 'react-select'
const RegisterTutor = () => {
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
    function handleSubjects(selectedOptions) {
        setSubjects(selectedOptions);
    }
    const handleChange = (event) => {
        setSelectedProvince(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            fullname: fullname,
            phonenumber: phonenumber,
            email: email,
            dob: dob,
            address: address,
            summary: summary,
            gender: gender,
            job: job,
            province: selectedProvince,
        }
        console.log(form);
    }
    return (
        <div className="registertutor">
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
                <button className="reg-tutor-btn" type='submit'>Đăng ký</button>
            </form>
        </div>
    )
}
export default RegisterTutor