import React, { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { AngleRightIcon, ChangeUser, CShangeUser, UserIcon } from '~/components/Icons/Icon'; 
import classNames from 'classnames/bind';


import MenuItem from './MenuItem';
import { menuUser } from '~/Layouts/Components/Header/Menu/ItemMenu';
import styles from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function MenuUser({ children, visible, onClickOutside }) {
  const [items, setItems] = useState([]);
  const [bottomMenu, setBottomMenu] = useState([]);
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
    const bottomMenuItem = Object.values(menuUser.endItem).map((item, index) => {
        return {
          index : item
        }
    });

    setItems(updatedItems);
    setBottomMenu(bottomMenuItem)
    
  }, []);

  useEffect(() => {
    setPageUser({
      userName: "Dat",
      avata: React.createElement(UserIcon)
      

    })
  }, []);
  const renderResult = (attrs) => {
    if (visible === true) {

      return (
        <div tabIndex="-1" {...attrs} className={cx('wrapper')}>
          <div className={(cx('pageUser', 'wrapper'))}>
            <div className={cx('infoUser')}>
            <div>
              <div className={cx('avata')}>
                <img
                    src={pageUser.avata}
                    alt={pageUser.name || 'Ảnh mặc định'}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://i.pinimg.com/736x/8f/1c/a2/8f1ca2029e2efceebd22fa05cca423d7.jpg'; 
                    }}
                />
              </div>
              <span >{pageUser.userName}</span>
            </div>
            </div>
            <div className={cx('line')}><hr /></div>
            <div className={cx('userName')}>
              <div>
                <span><ChangeUser/></span>
                <p>Xem tất cả trang cá nhân</p>
              </div>
            </div>
          </div>
          <div className={cx('MenuItem')}>
              {items.map((item, index) => (
                <MenuItem key={index} data={item} className={'hiddenTippy'} />
              ))}
          </div>
          <div className={cx('bottomMenu')}>
              <ul>
                {bottomMenu.map((item, index) =>(
                  <li key={index}>
                    <a href='/'>{item.index}</a>
                    <span>·</span>
                  </li>
                )
                )}
                Meta © 2024
              </ul>
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
