import classNames from "classnames/bind";
import styles from "./Post.module.scss"
import { CloseIcon, OptionIcon } from "~/components/Icons/Icon";
import { Link } from "react-router-dom";
import EmojiCanvas from "~/components/EmojiCanvas";
import { emojiLike, listIcon } from "~/components/Image/Image";

const cx = classNames.bind(styles)
function Post({
    avata,
    name,
    time,
    text,
    image,
    amountLike,
    amountComment,
    amountShare
}) {
    return ( 
        <div className={`wrapper ${cx("container")}`}>
            <div className={cx("header")}>
                <div className={cx("info")}>
                    <div className={cx("avata")}>
                        <img src={avata} alt=""></img>
                    </div>
                    <div className={cx("info_")}>
                        <Link className={cx("name")}> {name} </Link>
                        <Link className={cx("time")}> {time} </Link>
                    </div>
                </div>
                <div>
                    <div className={cx("btnOption")}>
                        <OptionIcon/>
                    </div>
                    <div className={cx("btnClose")}>
                        <CloseIcon/>
                    </div>
                </div>
            </div>
            <div className={cx("content")}>
                <div className={cx("text")}>
                    <span > {text} </span>
                </div>
                <div className={cx("image")}>
                    <img src={image} alt=""></img>
                </div>
                <div className={cx("interaction")}>
                    <div className={cx("like")}>
                        <div className={cx("emotion")}>
                            <div className={cx("iconEmotion")}>
                                <img src={emojiLike} alt=""/>
                            </div>
                            <span className={cx("amount")}>{amountLike}</span>
                        </div>
                    </div>
                    <div className={cx("comment")}>
                        <span className={cx("amount")}>{amountComment}</span>
                        <div className={cx("iconComment")}>
                           <i data-visualcompletion="css-img" style={{ backgroundImage: `url('${listIcon}')`, backgroundPosition: '0px -1201px',  backgroundSize: "auto",
                            width: "16px", height: "16px", backgroundRepeat: "no-repea", display: "inline-block", opacity:"0.7"
                        }}></i>
                        </div>
                    </div>
                    <div className={cx("share")}>
                        <span className={cx("amount")}>{amountShare}</span>
                        <div className={cx("iconShare")}>
                        <i data-visualcompletion="css-img" style={{ backgroundImage: `url('${listIcon}')`, backgroundPosition: '0px -1218px',  backgroundSize: "auto",
                            width: "16px", height: "16px", backgroundRepeat: "no-repea", display: "inline-block", opacity:"0.7"
                        }}></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("footer")}>
                <div className={cx("btnLike")}>
                    <div className={cx("iconLike")}>
                    <i data-visualcompletion="css-img" 
                    style={{
                        backgroundImage: `url(${listIcon})`, 
                        backgroundPosition: "0px -798px", 
                        backgroundSize: "auto",
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        opacity: "0.7"
                    }}></i>
                    </div>
                    <span>Thích</span>
                </div>
                <div className={cx("btnComment")}>
                    <div className={cx("iconComment")}>
                    <i data-visualcompletion="css-img" 
                    style={{
                        backgroundImage: `url(${listIcon})`, 
                        backgroundPosition: "0px -588px", 
                        backgroundSize: "auto",
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        opacity: "0.7"
                    }}></i>
                    </div>
                    <span>Bình luận</span>
                </div>
                <div className={cx("btnShare")}>
                    <div className={cx("iconShare")}>
                        <i data-visualcompletion="css-img" 
                        style={{
                            backgroundImage: `url(${listIcon})`, 
                            backgroundPosition: "0px -924px", 
                            backgroundSize: "auto",
                            width: '20px',
                            height: '20px',
                            backgroundRepeat: 'no-repeat',
                            display: 'inline-block',
                            opacity: "0.7"
                        }}></i>
                    </div>
                    <span>Chia sẻ</span>
                </div>
            </div>
            
        </div>
    );
}

export default Post;