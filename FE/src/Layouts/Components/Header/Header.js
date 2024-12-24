import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { useState, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';

import config from '~/config'
import images from '~/assets/images';
import styles from './Header.module.scss';
import Search from '~/Layouts/Components/Search';
import { FriendIcon, GroupIcon, HomeIcon, MarketplaceIcon, MenuIcon, MessagerIcon, NotificationIcon, UserIcon, VideoIcon } from '~/components/Icons/Icon';
import { useLocation } from "react-router-dom";
import {MenuUser}  from '~/components/Popper/Menu';


const cx = classNames.bind(styles);
function Header() {
    const location = useLocation();
    const locationPathName = location.pathname;
    const [pathName, setPathName] = useState('/')
    const [isVisible, setIsVisible] = useState(false);
    

    useEffect(() => {
        setPathName(locationPathName)
    }, [locationPathName])
    const handleToggle = () => {
        setIsVisible((prev) => !prev); 
    };

    return (
        < header className={cx('wrapper')} >
            <div className={cx('inner')}>
                <div className={cx('left-header')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt='Facebook'></img>
                    </Link>
                    < Search />
                </div>
                <div className={cx('center-header')}>

                    <>
                        <Tippy delay={[0, 50]} content="Trang chủ" placement="bottom"  theme='custom' >

                            <button className={cx('action-btn', pathName === '/' ? 'line' : 'action-btn-hover')}>
                                <Link to={config.routes.home}><HomeIcon /></Link>
                            </button>

                        </Tippy>
                        <Tippy delay={[0, 50]} content="Bạn bè" placement="bottom" >
                            <button className={cx('action-btn', pathName === '/friend' ? 'line' : 'action-btn-hover')}>
                                <Link to={config.routes.friend}><FriendIcon /></Link>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Video" placement="bottom"
                        >
                            <button className={cx('action-btn', pathName === '/video' ? 'line' : 'action-btn-hover')}>
                                <Link to={config.routes.video}><VideoIcon /></Link>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Marketplace" placement="bottom">
                            <button className={cx('action-btn', pathName === '/marketplace' ? 'line' : 'action-btn-hover')}>
                                <Link to={config.routes.marketplace}><MarketplaceIcon /></Link>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Nhóm" placement="bottom">
                            <button className={cx('action-btn', pathName === '/group' ? 'line' : 'action-btn-hover')}>
                                <Link to={config.routes.group}><GroupIcon /></Link>
                            </button>
                        </Tippy>
                    </>
                </div>

                <div className={cx('right-header')}>
                    <>
                        <Tippy delay={[0, 50]} content="Menu" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MenuIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Messager" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessagerIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Thông báo" placement="bottom">
                            <button className={cx('action-btn')}>
                                <NotificationIcon />
                            </button>
                        </Tippy>
                        
                        <div>
                            <MenuUser visible={isVisible} onClickOutside={() => setIsVisible(false)}>
                                <Tippy delay={[0, 50]} content="Tài khoản" placement="bottom">
                                    <button className={cx('action-btn')} onClick={handleToggle}>
                                        <UserIcon />
                                    </button>
                                </Tippy>
                            </MenuUser>
                        </div>
                    </>
                </div>
            </div>
        </header >

    );
}

export default Header;