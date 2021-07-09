import { lazy } from 'react';

const verifyConfig: Config = {
	authRequire: true,
	routes: [
		{
			path: '/verify',
			component: lazy(() => import('./VerifyApp'))
		},

	]
};

export default verifyConfig;
