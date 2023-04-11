import React from 'react';
function Profile() {
    return (
        <div className='profile-wrapper'>
            <div className='profile-avt'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkGq1f7x3EPaXHdH75vQXY-Co3z-hyD5F3XeZQaELfc6HzB5rRBrs5IkIUk0zSFcFgfI&usqp=CAU'></img>
            </div>
            <div className='profile-infor'>
                <div className='profile-item pro1'>
                    <label>Họ và tên</label>
                    <input type='text' />
                </div>
                <div className='profile-item pro2'>
                    <label>Ngày, tháng, năm sinh</label>
                    <input type='date' />
                </div>
                <div className='profile-item pro3'>
                    <label>Địa chỉ email</label>
                    <input type='text' />
                </div>
                <div className='profile-item pro4'>
                    <label>Số điện thoại</label>
                    <input type='text' />
                </div>
                <button type='submit'>Lưu thông tin</button>
            </div>
        </div>
    )
}
export default Profile;