//import HomePage from "pages/home-page/page/index";
import ExplorePage from "pages/explore/page/index";
import ResourcesPage from "pages/resources/page/index";
import { BasicRoute } from "components/elements/AppRouter";
import Layout from "components/layouts/Layout";
import { PAGES } from "constants/app";

import { productDetail } from "pages/product-detail/productDetail";

export const routes: BasicRoute[] = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      // { path: "/", component: HomePage, exact: true },

      { path: "/", component: productDetail, exact: true },
      {
        path: PAGES.EXPLORE,
        label: "Explore",
        component: ExplorePage,
        exact: true,
      },
      {
        path: PAGES.RESOURCES,
        label: "Resources",
        component: ResourcesPage,
        exact: true,
      },
      // {path: '/test', component: TestPage, exact: true},
    ],
  },
];
