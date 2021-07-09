import { lazy } from 'react';

const rolConfig: Config = {	
    authRequire: true,
	routes: [
		{
			path: '/rol',
			component: lazy(() => import('./RolApp'))
		},
		
	]
};

export default rolConfig;
