import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./ProfileShortcut.module.scss";

const cx = classNames.bind(style);

function ProfileShortcut({
    to,
    text,
    icon,
    onClick,
    customClass, 
    ...passProps
}) {
    return ( 
        <Link 
            to={to} 
            onClick={onClick} 
            className={cx("box-parent", customClass)} 
            {...passProps}
        >
            {icon && <img src={icon} alt="icon" className={cx("img-shortcut")} />}
            <div>{text}</div>
        </Link>
    );
}

export default ProfileShortcut;
