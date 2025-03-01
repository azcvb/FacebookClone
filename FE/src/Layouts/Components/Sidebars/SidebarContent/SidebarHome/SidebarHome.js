
import ProfileShortcut from '~/components/ProfileShortcut';
import styles from "./SidebarHome.module.scss"
import classNames from 'classnames/bind';
import React from 'react';
import { OptionIcon, SearchIcon } from '~/components/Icons/Icon';

const cx = classNames.bind(styles)

function SidebarHome({
    list,
    friend
}) {
    return (
        <div className={`${friend ? cx("friend") :""} ${cx("wrapper")}`}>
            {friend ? <div className={cx("header")}>
                <div className={cx("text")}>
                    <span>Người liên hệ</span>
                </div>
                <div className={cx("icon")}>
                    <i><SearchIcon/></i>
                    <i><OptionIcon/></i>
                </div>
            </div> :""}
            <ul>
            {Object.values(list).map((value, index) => (
                <li key={index}>
                    <ProfileShortcut
                        to = {value.to}
                        text= {value.text}
                        img= {value.img}
                        imgPosition={value.imgPosition}
                        friend={friend}
                    />
                </li>
                ))}
           
        </ul>
        <div className={cx("line")}/>
        <ul className={cx('shortcut')}>
            <span>Lối tắt của bạn</span>
            <li>
            <ProfileShortcut
                        to = "/"
                        text= "Mixigaming"
                    />
            </li>
        </ul>
        </div>
    );
}

export default SidebarHome;
