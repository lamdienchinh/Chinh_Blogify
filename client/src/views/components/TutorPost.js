import React from 'react';
import '../../public/css/TutorPost.css';
import moment from 'moment';

function formattime(time) {
    const momentUTC = moment(time);
    const momentGMT7 = momentUTC.utcOffset('+0700');
    const day = momentGMT7.date();
    const month = momentGMT7.month() + 1; // Tháng bắt đầu từ 0 nên phải cộng thêm 1
    const year = momentGMT7.year();
    const hour = momentGMT7.hour();
    const minute = momentGMT7.minute();
    const second = momentGMT7.second();
    const formattedDate = `${day}-${month}-${year} ${hour}:${minute}:${second}`;
    return formattedDate;
}
function TutorPost(props) {
    let post = props.post
    let datestart = formattime(post.datestart)
    let time = formattime(post.time)
    let dob = new Date(post.dob)
    dob = dob.getFullYear()
    return (
        <div className={`post-wrapper ${post._id}`}>
            <div>
                <h1>Gia sư tại {post.address} {post.province}</h1>
            </div>
            <div className ="post-tutor-img">
                <img src={`${post.img}`} ></img>
            </div>
            <div>
                Họ và tên: {post.fullname}
            </div>
            <div>
                Số điện thoại liên lạc: {post.phonenumber}
            </div>
            <div>
                Tóm tắt bản thân: {post.summary}
            </div>
            <div>
                Môn dạy học: {post.subjects.map(subject => subject).join(', ')}
            </div>
            <div>
                Giới tính: {post.gender}
            </div>
            <div>
                Năm sinh: {dob}
            </div>
            <div>
                Thời gian tạo bài: {time}
            </div>
        </div>
    )
}
export default TutorPost