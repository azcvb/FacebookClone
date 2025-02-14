import config from '~/config';

import { HeaderOnly } from '~/Layouts';

import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Search from '~/Pages/Search';
import Friend from '~/Pages/Friend';
import Video from '~/Pages/Video';
import Marketplace from '~/Pages/Marketplace';
import Group from '~/Pages/Group';
import Login from '~/Pages/Login';
import Register from '~/Pages/Register';
import { SidebarHome } from '~/Layouts/Components/Sidebars/SidebarContent';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.friend, component: Friend, },
    { path: config.routes.video, component: Video, },
    { path: config.routes.marketplace, component: Marketplace, },
    { path: config.routes.group, component: Group, },
    { path: config.routes.logout, component: Login, layout: null},
    { path: config.routes.register, component: Register, layout: null},
]

const privateRoutes = [];

const siderRoutes = [
    { path: config.routes.home, component: SidebarHome },
];

export { publicRoutes, privateRoutes, siderRoutes };