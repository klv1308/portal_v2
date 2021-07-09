import { lazy } from 'react';

const routesConfig: Config = {
    authRequire: false,
    routes: [
        {
            path: '/',
            component: lazy(() => import('./landingPage/LandingPage'))
        },
        {
            path: '/login',
            component: lazy(() => import('./login/Login'))
        },
        {
            path: '/portal/dashboard',
            component: lazy(() => import('./portal/PortalDashboard'))
        }
    ]
}

export default routesConfig;