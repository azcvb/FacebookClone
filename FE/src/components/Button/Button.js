
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    onClick,
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
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={classIconR}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;