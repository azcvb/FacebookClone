import config from '~/config';

import { HeaderOnly } from '~/Layouts';

import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Search from '~/Pages/Search';
import Register from '~/Pages/Register';
import Login from '~/Pages/Login';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.login, component: Login, layout: null },
]

const privateRoutes = [];

export { publicRoutes, privateRoutes };