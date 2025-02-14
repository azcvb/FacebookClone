
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    classIconLeft,
    classIconRight,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: true
    })
    const classIconL = cx('icon', {
        [classIconLeft]: true
    })
    const classIconR = cx('icon', {
        [classIconRight]:true
    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={classIconL}>{leftIcon}</span>}
            <div>
                <span onClick={onClick} className={cx('title')}>{typeof children === 'string' ? children : children.title}</span>
                {typeof children === 'object' ? (<span className={cx('childrenTitle')}>{children.childrenTitle}</span>) : null}    
            </div>
            {rightIcon && <span className={classIconR}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;