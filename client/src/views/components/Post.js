import React from 'react';
import '../../public/css/Post.css';
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
function Post(props) {
    let post = props.post
    let datestart = formattime(post.datestart)
    let time = formattime(post.createAt)
    return (
        <div className={`post-wrapper ${post._id}`}>
            <div>
                <h1>Tìm gia sư môn {post.subject} tại {post.province}</h1>
            </div>
            <div>
                Số điện thoại liên lạc: {post.phonenumber}
            </div>
            <div>
                Học phí: {post.salary}
            </div>
            <div>
                Tóm tắt {post.summary}
            </div>
            <div>
                Thời gian tạo bài: {time}
            </div>
            <div>
                Ngày bắt đầu học: {datestart}
            </div>
            <div>
                Số lượng học viên: {post.studentnum}
            </div>
            <div>
                Giới tính học viên: {post.studentgender}
            </div>
            <div>
                Môn học: {post.subject}
            </div>
            <div>
                Số buổi trong tuần: {post.numsessions}
            </div>
            <div>
                <h1>Yêu cầu gia sư</h1>
            </div>
            <div>
                Giới tính gia sư: {post.tutorgender}
            </div>
            <div>
                Mô tả khác: {post.differ}
            </div>
        </div>
    )
}
export default Post