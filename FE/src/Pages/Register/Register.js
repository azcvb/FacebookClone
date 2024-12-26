import classNames from "classnames/bind";
import styles from "./Register.module.scss"
import { imgFacebook } from "~/assets/images";

const cx = classNames.bind(styles)
function Register() {
    return (
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={imgFacebook} alt=""/>
                </div>
                <div className={`wrapper ${cx('content')}`}>
                    <div className={cx('title')}>
                        <h2>Tạo tài khoản</h2>
                        <p>Nhanh chóng và dễ dàng</p>
                    </div>
                    <div className={cx('fromRegister')}>
                        <div className={cx('userName')}>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                                </div>
                            </div>
                        </div>
                        <div className={cx('dateTime')}>
                            <p>
                                Ngày sinh
                            </p>
                            <div class="col-12">
                                <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                                <select class="form-select" id="inlineFormSelectPref">
                                <option selected>Choose...</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                                <select class="form-select" id="inlineFormSelectPref">
                                <option selected>Choose...</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                                <select class="form-select" id="inlineFormSelectPref">
                                <option selected>Choose...</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('gender')}>

                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Register;