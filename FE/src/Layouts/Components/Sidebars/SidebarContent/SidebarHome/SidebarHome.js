
import ProfileShortcut from '~/components/ProfileShortcut';
import styles from "./SidebarHome.module.scss"
import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(styles)

function SidebarHome({
    list
}) {
    return (
        <div className={cx("wrapper")}>
            <ul>
            {Object.values(list).map((value, index) => (
                <li key={index}>
                    <ProfileShortcut
                        to = {value.to}
                        text= {value.text}
                        img= {value.img}
                        imgPosition={value.imgPosition}
                        // icon= {React.createElement(value.icon)}
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
