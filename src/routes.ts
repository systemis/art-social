import HomePage from '~/pages/home-page/page/index';
import { BasicRoute } from '~/components/elements/Router';
import Layout from '~/components/layouts/Layout';

export const routes: BasicRoute[] = [
    {
        path: '/',
        component: Layout,
        exact: false,
        routes: [
            {path: '/', component: HomePage, exact: true},
        ]
    }
]