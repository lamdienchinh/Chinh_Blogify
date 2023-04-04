import React from 'react';
function Profile() {
    return (
        <div className='profile-wrapper'>
            <div className='profile-avt'>
                <img src='https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/331921269_1383189645790282_1622035843689328340_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0cbnMVIvohUAX_KQGUq&_nc_ht=scontent-hkt1-2.xx&oh=00_AfByH4wQhARe-DLl-FoLJWFXytOKW33FLNFWz2C26g4iSA&oe=642D802B'></img>
            </div>
            <div className='profile-infor'>
                <div className='profile-user-name'>
                    <label>Họ và tên</label>
                    <input type='text' />
                </div>
                <div className='profile-user-dob'>
                    <label>Ngày, tháng, năm sinh</label>
                    <input type='date' />
                </div>
                <div className='profile-user-address'>
                    <label>Địa chỉ</label>
                    <input type='text' />
                </div>
                <button type='submit'></button>
            </div>
        </div>
    )
}
export default Profile;