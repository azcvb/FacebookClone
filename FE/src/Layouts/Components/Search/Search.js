import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useState, useEffect } from "react";
import HeadlessTippy from '@tippyjs/react/headless';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserIcon } from "~/components/Icons/Icon";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setSearchResult([1,2,3])
        },3000)
    },[])

    const handleHideResult = () => {
        setIsVisible(false);
    };
    return (
        <div>
            <HeadlessTippy 
            content="Search"
                interactive
                visible={isVisible && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={attrs => (
                    <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
                        {!searchResult.length > 0 ? (
                            <p>Không có tìm kiếm nào gần đây</p>
                    ) : (
                        <ul>
                            {/* <li className={cx('headerSearch')}>
                                <span>Mới đây</span>
                                <Link>Chỉnh sửa</Link>
                            </li> */}
                            {searchResult.map((rl, index)=>(
                                <li key={index}>
                                    <Link to={'/search/' + rl}>
                                    <span><FontAwesomeIcon className={cx('result-icon')} icon={faSearch}/></span>
                                    <div className={cx('result-info')}>
                                        <div className={cx('userName')}>{rl}</div>
                                        <div className={cx('friendCommon')}>{rl}</div>
                                    </div>
                                    <UserIcon  className={cx('result-user')}/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    </div>
                  )}
            >
                <div className={cx('search')}>
                   <div>
                   <span className={cx('icon-search')}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </span>
                    <input className={cx('input-search')} placeholder="Tìm kiếm trên Facebook..." onFocus={() => setIsVisible(true)}></input>
                   </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
