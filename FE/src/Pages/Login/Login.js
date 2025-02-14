import classNames from "classnames/bind";

import styles from "./Login.module.scss"
import { imgFacebook } from "~/assets/images";
import { Link, useLocation } from "react-router-dom";
import { FooterForLogout } from "~/Layouts/Components/Footers";
import { useEffect, useRef } from "react";

import Cookies from 'js-cookie';
import loginService from "~/apiService/loginService";

const cx = classNames.bind(styles)
function Login() {

    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/login"){
            window.location.href = ("http://localhost:3000/")
        }
       
    }, [])
    const username = useRef("")
    const password = useRef("")
   
    const submitLogin = async () => {
    const data = {
        "username": username.current.value,
        "password": password.current.value
    };
    try {
        const res = await loginService(data);
        if(res.result.authencated) {
            Cookies.set("Token", res.result.token)
            window.location.href = "http://localhost:3000/";
        }else{
            console.log(JSON.parse(res))
        }
    } catch (err) {
        console.log("Lỗi đăng nhập:", err);
    }
};
    return ( <div className={`${cx('container')}`} >   
                <div className={cx('containerContent')}>
                <div className={cx('content')}>
                    <div className={cx('leftContent')}>
                        <div className={cx('logoFace')}>
                        <img src={imgFacebook} alt=""/>
                        </div>
                        <h2>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
                    </div>
                    <div className={cx('rightContent')}>
                        <div className={`wrapper ${cx('fromLogin')}`}>
                        <div>
                            <div>
                                <input placeholder="Email hoặc số điện thoại" name="username" ref={username}/>
                                <input placeholder="Mật khẩu" name="password" ref={password}/>
                            </div>
                            <button className=" btn-primary" onClick={submitLogin} >Đăng nhập</button>
                            <Link className={cx('forgotPass')} to='/login' >Quên mật khẩu?</Link>
                        </div>  
                        <hr/>
                        <div className={` ${cx('btnNewAccount')}`}>
                            <Link to='/register' >Tạo tài khoản mới</Link>
                        </div>
                        </div>
                        <div className={cx('footRightContent')}>
                            <Link to='/login'>Tạo Trang </Link>
                            <span>dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.</span>
                        </div>
                    </div>
                </div>
                </div>
                <FooterForLogout/>
            </div>
         );
}

export default Login;