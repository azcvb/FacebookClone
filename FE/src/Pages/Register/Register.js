import classNames from "classnames/bind";
import styles from "./Register.module.scss"
import { imgFacebook } from "~/assets/images";
import { Link } from "react-router-dom";
import { FooterForLogout } from "~/Layouts/Components/Footers";
import * as createUserService  from "~/apiService/createUserService";
import {useEffect, useState } from "react";

const cx = classNames.bind(styles)
function Register() {
    const [boxErr, setBoxErr] = useState({
        "isErr": false,
        "inputErr": "",
        "value": ""
    });
    const [isChange, setIsChange] = useState(true)
    const date = new Date();
    const [dob, setDob] = useState(date.toISOString().split("T")[0])
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
    const useDob = (e) => {
        const selectDate = e.target.name
        var valueDate = e.target.value
        if(!parseInt(valueDate)) {
            valueDate = valueDate.slice(6,7)
        }
        if(parseInt(valueDate) < 10) {
            valueDate = "0"+valueDate
        }
        if(selectDate === "day") {
            const newDate = dob.slice(0, 8) + valueDate;
            setDob(newDate)
        }else if(selectDate === "month"){
            const newDate = dob.slice(0, 5) + valueDate + dob.slice(7);
            setDob(newDate)
        }else if(selectDate === "year") {
            const newDate = valueDate + dob.slice(4) ;
            setDob(newDate)
        }
       
    }
    const validEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }
    const validPhone = (value) => {
        const regex = /^0\d{9,10}$/;
        return regex.test(value);
    }
    const validPassword = (value) => {
        const regex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;
        return regex.test(value);
      };
    const validDob = (value) => {
        const dob = new Date(value)
        const today = new Date()
        
        let age = today.getFullYear() - dob.getFullYear()

        const monthDiff = today.getMonth() - dob.getMonth()
        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())){
            age--;
        }
        return age >= 18
    }
    const handllerClickIp = (input, value, e) => {
        if(e === "") 
            {setIsChange(true)

            }else{setIsChange(false)}
        setBoxErr((prev) => ({
            ...prev,
            isErr: true,
            inputErr: input,
            value: value
        }))
       
    }
    const handleBlurIp = () => {
        if(boxErr.inputErr === "username") {
            if(validEmail(boxErr.value || validPhone(boxErr.value))){
                handllerClickIp("username", "Bạn có thể sử dụng thông tin này khi đăng nhập và khi cần đặt lại mật khẩu.", "")
            }
        }
        setBoxErr((prev) => ({
            ...prev,
            isErr: false
        }))
    }
  
    const box = (value) => {
        return (<div className={`col ${cx("box-child")}`}>
                <div className={cx('box-err')}>
                    <p>{value}</p>
                </div>
                <div className={cx('triangle-right')}></div>
                </div>)
    }
    const createUser = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const jsonObject = {};
    
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        jsonObject["dob"] = dob
        if(!validDob(jsonObject.dob)){
            setIsChange(true)
            setBoxErr((prev) => ({
                ...prev,
                isErr: true,
                inputErr: "date",
                value: "Có vẻ như tuổi của bạn chưa đủ 18."
            }))
            return;
        }
        if(!validPhone(jsonObject.username) && !validEmail(jsonObject.username)){
            setIsChange(true)
            setBoxErr((prev) => ({
                ...prev,
                isErr: true,
                inputErr: "username",
                value: "Bạn cần nhập đúng thông tin đăng nhập."
            }))
            return;
        }
        if(!validPassword(jsonObject.password)){
            setIsChange(true)
            setBoxErr((prev) => ({
                ...prev,
                isErr: true,
                inputErr: "password",
                value: "Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu câu(như ! và &)"
            }))
            return;
        }
        try {
            await createUserService.createUser(jsonObject)
            window.location.href =  ("http://localhost:3000/logout")

        } catch (error) { 
            console.error("Lỗi khi gửi dữ liệu:", error);
        }
    };
    
 
    return (
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={imgFacebook} alt=""/>
                </div>
                <form className={`wrapper ${cx('content')}`} onSubmit={createUser}>
                    <div className={cx('title')}>
                        <h2>Tạo tài khoản mới</h2>
                        <p>Nhanh chóng và dễ dàng</p>
                    </div>
                    <hr/>
                    <div className={cx('fromRegister')}>
                        <div className={cx('userName')}>
                            <div className={`row ${cx("rowContent")}`}>
                                <div className={`col ${cx("box-parent")}`}>
                                    {boxErr.isErr && boxErr.inputErr === "firstName" && isChange ? box(boxErr.value) : ""}
                                    <input 
                                        onBlur = {() => handleBlurIp()} 
                                        onClick={(e) => handllerClickIp("firstName", "Tên của bạn là gì?", e.target.value)} 
                                        name="firstName" type="text" className={`form-control `} placeholder="Họ" aria-label="First name" required/>
                                </div>
                                <div className={`col ${cx("box-parent")}`}>
                                    {boxErr.isErr && boxErr.inputErr === "lastName" && isChange ? box(boxErr.value) : ""}
                                    <input onBlur = {() => handleBlurIp()} onClick={(e) => handllerClickIp("lastName", "Tên của bạn là gì?", e.target.value)}  name="lastName" type="text" className={`form-control `} placeholder="Tên" aria-label="Last name" required/>
                                </div>
                            </div>
                        </div>
                        <div className={cx('dateTime', 'box-parent')}>
                        {boxErr.isErr && boxErr.inputErr === "date"  && isChange ? box(boxErr.value) : ""}
                            <p>
                                Ngày sinh
                            </p>
                            <div>
                                <div className={cx("col-12", "date")}>
                                    <label className={cx("visually-hidden")} htmlFor="inlineFormSelectPref">Preference</label>
                                    <select className={cx("form-select")} id="inlineFormSelectPref" name = "day"  onChange={useDob}>
                                    {arrDay.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                    </select>
                                </div>
                                <div className={cx("col-12", "date")}>
                                    <label className={cx("visually-hidden")} htmlFor="inlineFormSelectPref">Preference</label>
                                    <select className={cx("form-select")} id="inlineFormSelectPref" name = "month"  onChange={useDob}>
                                    {arrMonth.map((item) => (
                                        <option key={item}>Tháng {item}</option>
                                    ))}
                                    </select>
                                </div>
                                <div className={cx("col-12", "date")}>
                                    <label className={cx("visually-hidden")} htmlFor="inlineFormSelectPref">Preference</label>
                                    <select className={cx("form-select")} id="inlineFormSelectPref" name = "year"  onChange={useDob}>
                                    {arrYear.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={cx('gender', 'box-parent')}>
                            
                            <p>
                                Giới tính
                            </p>
                                <div>
                                    <div className={cx("form-check-inline", "genderOption")}>
                                        <label className={cx("form-check-label")} htmlFor="inlineRadio1">Nữ</label>
                                        <input className={cx("form-check-input")} type="radio" name="gender" id="inlineRadio1" value="Nữ" defaultChecked />
                                    </div>
                                    <div className={cx(" form-check-inline", "genderOption")}>
                                        <label className={cx("form-check-label")} htmlFor="inlineRadio2">Nam</label>
                                        <input className={cx("form-check-input")} type="radio" name="gender" id="inlineRadio2" value="Nam"/>
                                    </div>
                                    <div className={cx(" form-check-inline", "genderOption")}>
                                        <label className={cx("form-check-label")} htmlFor="inlineRadio3">Tùy chỉnh</label>
                                        <input className={cx("form-check-input")} type="radio" name="gender" id="inlineRadio3" value="Khác" />
                                    </div>
                                </div>
                        </div>
                        <div className={cx('userAcc')}>
                            <div className={cx("col", 'box-parent')}>
                            {boxErr.isErr && boxErr.inputErr === "username" && isChange ? box(boxErr.value) : ""}
                                <input 
                                    onBlur = {() => handleBlurIp()} 
                                    onClick={(e) => handllerClickIp("username", "Bạn có thể sử dụng thông tin này khi đăng nhập và khi cần đặt lại mật khẩu.",e.target.value)} 
                                    name="username" type="text" className={cx("form-control")} placeholder="Số điện thoại hoặc email" aria-label="Số điện thoại hoặc email" required/>
                            </div>
                            <div className={cx("col", 'box-parent')}>
                            {boxErr.isErr && boxErr.inputErr === "password" && isChange ? box(boxErr.value) : ""}
                                <input 
                                onBlur = {() => handleBlurIp()} 
                                onClick={(e) => handllerClickIp("password", "Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu câu(như ! và &)", e.target.value)} 
                                name="password" type="password" className={cx("form-control")} placeholder="Mật khẩu mới" aria-label="Mật khẩu mới" required/>
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
                            <div >
                                <button className={cx('btnForm')} type="submit">Đăng ký</button>
                            </div>
                            <div className={cx('toLogin')}>
                                <Link to={'/logout'} >Bạn đã có tài khoản ư?</Link>
                            </div>
                        </div>
                    </div>
                </form>
                <FooterForLogout/>
            </div>

    );
}

export default Register;