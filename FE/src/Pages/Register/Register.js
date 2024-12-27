import classNames from "classnames/bind";
import styles from "./Register.module.scss"
import { imgFacebook } from "~/assets/images";
import { Link } from "react-router-dom";
import { FooterForLogout } from "~/Layouts/Components/Footers";

const cx = classNames.bind(styles)
function Register() {
    const date = new Date();
    const toDay = date.getDate();
    const toMonth = date.getMonth()+1;
    const toYear = date.getFullYear()
    let arrDay = []
    const arrMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let arrYear = []
    let numberDay = 0
    if (toMonth === 2) {
        const year = new Date().getFullYear();
        numberDay = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
    } else if (toMonth === 4 || toMonth === 6 || toMonth === 9 || toMonth === 11) {
        numberDay = 30;
    } else {
        numberDay = 31;
    }
    for(var i = 1; i <=  numberDay; i++) {
        arrDay.push(i)
    }
    for(var j = toYear; j >= 2000; j--) {
        arrYear.push(j)
    }
    return (
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={imgFacebook} alt=""/>
                </div>
                <div className={`wrapper ${cx('content')}`}>
                    <div className={cx('title')}>
                        <h2>Tạo tài khoản mới</h2>
                        <p>Nhanh chóng và dễ dàng</p>
                    </div>
                    <hr/>
                    <div className={cx('fromRegister')}>
                        <div className={cx('userName')}>
                            <div className={`row ${cx("rowContent")}`}>
                                <div className={`col ${cx("")}`}>
                                    <input type="text" className={`form-control `} placeholder="Họ" aria-label="First name"/>
                                </div>
                                <div className={`col ${cx("")}`}>
                                    <input type="text" className={`form-control `} placeholder="Tên" aria-label="Last name"/>
                                </div>
                            </div>
                        </div>
                        <div className={cx('dateTime')}>
                            <p>
                                Ngày sinh
                            </p>
                            <div>
                                <div className={cx("col-12", "date")}>
                                    <label className={cx("visually-hidden")} for="inlineFormSelectPref">Preference</label>
                                    <select className={cx("form-select")} id="inlineFormSelectPref">
                                    {arrDay.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                    </select>
                                </div>
                                <div className={cx("col-12", "date")}>
                                    <label className={cx("visually-hidden")} for="inlineFormSelectPref">Preference</label>
                                    <select className={cx("form-select")} id="inlineFormSelectPref">
                                    {arrMonth.map((item) => (
                                        <option key={item}>Tháng {item}</option>
                                    ))}
                                    </select>
                                </div>
                                <div className={cx("col-12", "date")}>
                                    <label className={cx("visually-hidden")} for="inlineFormSelectPref">Preference</label>
                                    <select className={cx("form-select")} id="inlineFormSelectPref">
                                    {arrYear.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={cx('gender')}>
                            <p>
                                Giới tính
                            </p>
                            <div>
                                <div className={cx("form-check-inline", "genderOption")}>
                                    <label className={cx("form-check-label")} for="inlineRadio1">Nữ</label>
                                    <input className={cx("form-check-input")} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                </div>
                                <div className={cx(" form-check-inline", "genderOption")}>
                                    <label className={cx("form-check-label")} for="inlineRadio2">Nam</label>
                                    <input className={cx("form-check-input")} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                </div>
                                <div className={cx(" form-check-inline", "genderOption")}>
                                    <label className={cx("form-check-label")} for="inlineRadio3">Tùy chỉnh</label>
                                    <input className={cx("form-check-input")} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                </div>
                            </div>
                        </div>
                        <div className={cx('userAcc')}>
                            <div className={cx("col")}>
                                <input type="text" className={cx("form-control")} placeholder="Số điện thoại hoặc email" aria-label="Số điện thoại hoặc email"/>
                            </div>
                            <div className={cx("col")}>
                                <input type="password" className={cx("form-control")} placeholder="Mật khẩu mới" aria-label="Mật khẩu mới"/>
                            </div>
                        </div>
                    </div>
                    <div className={cx('infoContent')}>
                        <div>
                            <p>Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook.
                                <Link to="/register">Tìm hiểu thêm.</Link>
                            </p>
                        </div>
                        <div>
                            <p>Bằng cách nhấp vào Đăng ký, bạn đồng ý với 
                                <Link to="/register"> Điều khoản</Link>
                                , 
                                <Link to="/register"> Chính sách quyền riêng tư </Link>
                                và 
                                <Link to="/register"> Chính sách </Link>
                                cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                            </p>
                        </div>
                        <div>
                            <div className={cx('btnForm')}>
                                <Link to={'/register'}>Đăng ký</Link>
                            </div>
                            <div className={cx('toLogin')}>
                                <Link to={'/login'}>Bạn đã có tài khoản ư?</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterForLogout/>
            </div>

    );
}

export default Register;