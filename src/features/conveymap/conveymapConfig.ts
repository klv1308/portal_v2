import { lazy } from 'react';

const conveymapConfig: Config = {	
    authRequire: true,
	routes: [
		{
			path: '/conveymap',
			component: lazy(() => import('./ConveymapApp'))
		},
		
	]
};

export default conveymapConfig;
