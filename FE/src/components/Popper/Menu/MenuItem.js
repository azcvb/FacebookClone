import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            className={classes}
            leftIcon={data.leftIcon}  
            to={data.to}
            rightIcon={data.rightIcon}
            onClick={() => (data.evenOnclick || onClick)()} 
            classIconLeft={data.classIconLeft}
            classIconRight={data.classIconRight}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
