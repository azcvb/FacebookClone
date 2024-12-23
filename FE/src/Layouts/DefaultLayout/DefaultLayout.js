import PropTypes from 'prop-types';
import Header from '~/Layouts/Components/Header';
import Sidebar from '~/Layouts/Components/Sidebars';

function DefaultLayout({ children, sidebarPages }) {
    return (
        <div>
            <Header />
            <div>
                {sidebarPages && <Sidebar>{sidebarPages}</Sidebar>}
                <div>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    sidebarPages: PropTypes.node,
};

export default DefaultLayout;
