import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footers.module.scss"

const cx = classNames.bind(styles)
function FooterForLogout() {
    return ( 
            <footer>
                    <div className={cx('container')}>
                        <ul>
                            <li>
                                <Link to={'/login'} >Tiếng Việt</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>English (UK)</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>中文(台灣)</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>한국어</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>日本語</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Français (France)</Link>
                            </li>
                            <span><FontAwesomeIcon icon={faPlus}/></span>
                        </ul>
                        <hr/>
                        <ul>
                            <li>
                                <Link to={'/login'}>Đăng ký</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Đăng nhập</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Messenger</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Facebook Lite</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Video</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Địa điểm</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Trò chơi</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Marketplace</Link>
                            </li>
                        </ul>
                    </div>
            </footer>
     );
}

export default FooterForLogout;