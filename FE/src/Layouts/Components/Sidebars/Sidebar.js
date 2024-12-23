import classNames from "classnames/bind";
import styles from './Sidebars.module.scss';
import SidebarHome from "./SidebarContent/SidebarHome";

const cx = classNames.bind(styles);

const SidebarComponents = {
    SidebarHome,
};

function Sidebar({ children }) {
    let path = '';

    if (typeof children === 'string') {
        path = children.replace('/', '').replace(/^./, (str) => str.toUpperCase());

        if (children === '/') {
            path = 'Home';
        }
    }


    const Component = SidebarComponents['Sidebar' + path];

    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-content')}>
                {Component ? <Component /> : <h2>Sidebar {path}</h2>}
            </div>
        </div>
    );
}

export default Sidebar;
