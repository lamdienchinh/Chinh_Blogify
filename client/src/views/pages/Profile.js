import React from 'react';
import "../../public/css/Profile.css"
function Profile() {
    return (
        <div className='profile-wrapper'>
            <div className='profile-avt pro0'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkGq1f7x3EPaXHdH75vQXY-Co3z-hyD5F3XeZQaELfc6HzB5rRBrs5IkIUk0zSFcFgfI&usqp=CAU'></img>
            </div>
            <div className='profile-infor'>
                <div className='profile-item pro1'>
                    <label>Họ và tên</label>
                    <input type='text' className="profile-name" />
                </div>
                <div className='profile-item pro2'>
                    <label>Ngày, tháng, năm sinh</label>
                    <input type='date' className="profile-date" />
                </div>
                <div className='profile-item pro3'>
                    <label>Địa chỉ email</label>
                    <input type='text' className="profile-email" />
                </div>
                <div className='profile-item pro4'>
                    <label>Số điện thoại</label>
                    <input type='text' className="profile-phonenumber" />
                </div>
            </div>
            <div className='save-btn-wrap pro5'>
                <button type='submit' className='save-btn'>Lưu thông tin</button>
            </div>
        </div>
    )
}
export default Profile;