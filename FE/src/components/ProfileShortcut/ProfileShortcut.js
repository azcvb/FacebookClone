import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./ProfileShortcut.module.scss";

const cx = classNames.bind(style);

function ProfileShortcut({
    to,
    text,
    icon,
    imgPosition,
    img,
    onClick,
    customClass, 
    friend,
    ...passProps
}) {
    
    return ( 
        <Link 
            to={to} 
            onClick={onClick} 
            className={cx("box-parent", customClass)} 
            {...passProps}
        >
              {friend ? <img src={img} alt=""/> :icon || <i
                data-visualcompletion="css-img"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: imgPosition,
                  backgroundSize: "auto",
                  width: "36px",
                  height: "36px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block"
                }}
              ></i>}
            <span>{text}</span>
        </Link>
    );
}

export default ProfileShortcut;
