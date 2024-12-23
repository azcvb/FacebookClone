import React, { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { AngleRightIcon, UserIcon } from '~/components/Icons/Icon'; 
import classNames from 'classnames/bind';


import MenuItem from './MenuItem';
import { menuUser } from '~/Layouts/Components/Header/Menu/ItemMenu';
import styles from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function MenuUser({ children, visible, onClickOutside }) {
  const [items, setItems] = useState([]);
  const [pageUser, setPageUser] = useState([]);
  
  useEffect(() => {
    const updatedItems = Object.values(menuUser.items).map((item, index) => {
      let rightIcon = undefined;
      if (menuUser.childrenItem.endIcon.includes(index)) {
        rightIcon = React.createElement(AngleRightIcon);
      }
      return {
        title: item,
        leftIcon: React.createElement(menuUser.icon[index]),
        rightIcon: rightIcon,
        to: menuUser.to[index],
        classIconLeft: 'iconBorder',
        classIconRight: 'iconRight',
      };
    });

    setItems(updatedItems);
  }, []);
  useEffect(() => {
    setPageUser({
      avata: UserIcon,
      userName: "Dat"
    })
  }, []);
  const renderResult = (attrs) => {
    if (visible === true) {

      return (
        <div tabIndex="-1" {...attrs} >
          <div className={(cx('pageUser'))}>
            <div >
              <MenuItem data={pageUser}/> 
            </div>
            <button><span><FontAwesomeIcon/></span>Xem tất cả trang cá nhân</button>

          </div>
          <div className={cx('MenuItem', 'wrapper')}>
              {items.map((item, index) => (
                <MenuItem key={index} data={item} className={'hiddenTippy'} />
              ))}
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  };

  return (
    <div className={cx('test')}>
      <Tippy
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        render={renderResult}
        visible={visible}
        onClickOutside={onClickOutside}
    >
      {children}
    </Tippy>
    </div>
  );
}

export default MenuUser;
