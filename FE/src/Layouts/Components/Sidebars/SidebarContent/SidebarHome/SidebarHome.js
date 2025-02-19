import classNames from 'classnames/bind';
import styles from './SidebarHome.module.scss';

import ProfileShortcut from '~/components/ProfileShortcut';

const cx = classNames.bind(styles);

function SidebarHome() {
    return (
        <ul>
            <li>
                <ProfileShortcut 
                    to="/" 
                    text="1234"
                    icon="http://localhost:3000/static/media/logo.df3d24753a88042adec4e38cd5bde4aa.svg"
                />
            </li>
        </ul>
    );
}

export default SidebarHome;
