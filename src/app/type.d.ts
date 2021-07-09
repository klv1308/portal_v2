type Config = {
    authRequire: boolean;
    routes: RouteConfig[]
}

type RouteConfig = {
    path: string;
    component: any
}