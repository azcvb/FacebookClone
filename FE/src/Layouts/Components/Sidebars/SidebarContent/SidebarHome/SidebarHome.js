
import ProfileShortcut from '~/components/ProfileShortcut';
import { IconExtend, UserIcon } from '~/components/Icons/Icon';

import styles from "./SidebarHome.module.scss"
import classNames from 'classnames/bind';
import { feedTable, sidebarHome } from '~/components/Image/Image';
import React from 'react';

const cx = classNames.bind(styles)

function SidebarHome() {
    const sidebar = {
        0: {
            "to": "/friend",
            "text": "dat",
            // "img": <UserIcon/>,
            "imgPosition": ""
        },
        1: {
            "to": "/",
            "text": "Bạn bè",
            "img": sidebarHome,
            "imgPosition": "0 -333px"
        },
        2: {
            "to": "/",
            "text": "Nhóm",
            "img": sidebarHome,
            "imgPosition": "0 -37px"
        },
        3: {
            "to": "/",
            "text": "Đã lưu",
            "img": sidebarHome,
            "imgPosition": "0 -185px"
        },
        4: {
            "to": "/",
            "text": "Kỷ niệm",
            "img": sidebarHome,
            "imgPosition": "0 -481px"
        },
        5: {
            "to": "/",
            "text": "Video",
            "img": sidebarHome,
            "imgPosition": "0 -555px"
        },
        6: {
            "to": "/",
            "text": "Marketplace",
            "img": sidebarHome,
            "imgPosition": "0 -444px"
        },
        7: {
            "to": "/",
            "text": "Bảng feed",
            "img": feedTable,
            "imgPosition": ""
        },
        8: {
            "to": "/",
            "text": "Xem thêm",
            "icon": UserIcon
        }
    }
    return (
        <div className={cx("wrapper")}>
            <ul>
            {Object.values(sidebar).map((value, index) => (
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
