import classNames from "classnames/bind";

import styles from "./Login.module.scss"
import { imgFacebook } from "~/assets/images";
import { Link } from "react-router-dom";
import { FooterForLogout } from "~/Layouts/Components/Footers";

const cx = classNames.bind(styles)
function Login() {
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
                                <input placeholder="Email hoặc số điện thoại"/>
                                <input placeholder="Mật khẩu"/>
                            </div>
                            <button className=" btn-primary">Đăng nhập</button>
                            <Link className={cx('forgotPass')}to='/login' >Quên mật khẩu?</Link>
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