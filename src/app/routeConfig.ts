import appConfig from './appConfig';
import conveymapConfig from '../features/conveymap/conveymapConfig';
import verifyConfig from '../features/verify/verifyConfig';
import rolConfig from '../features/rol/rolConfig';


const generateRoutesFromConfigs = (config: Config[]): RouteConfig[] => {
    let allRoutes: RouteConfig[] = [];
    config.forEach(conf => {
        allRoutes = [...allRoutes, ...conf.routes];
    });
    return allRoutes;
}

const routeConfig: Config[] = [
    appConfig,
    conveymapConfig,
    verifyConfig,
    rolConfig
]

const routes = [
    ...generateRoutesFromConfigs(routeConfig),
];

export default routes;

