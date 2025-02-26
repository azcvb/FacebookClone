import classNames from "classnames/bind";
import styles from "./Story.module.scss"
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)
function Story({
    avata, 
    storyThum}) {
    return ( 
        <div className={`wrapper ${cx("storyContainer")}`}>
            <Link>
                <div className={cx("story_thum")}>
                    <img src={storyThum}alt=""/>
                    <div className={cx("story_avata")}>
                        <img className={cx("avata")} src={avata} alt=""/>
                    </div>    
                
                </div>
                <span>Mesut Ozil</span>
            </Link>
        </div>
    );
}

export default Story;