import { BasicRoute } from "components/elements/AppRouter";
import Layout from "components/layouts/Layout";
import { PAGES } from "constants/app";
import { Explore } from 'pages/explore/pages';
import LoginPage from 'pages/login/pages';
import { ProductDetail } from "pages/product-detail/pages";
import ResourcesPage from "pages/resources/page/index";
import { FaRegCompass } from 'react-icons/fa';
import { HiOutlineNewspaper } from 'react-icons/hi';

export const routes: BasicRoute[] = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      //{ path: "/", component: Home, exact: true },
      { path: "/productDetail", component: ProductDetail, exact: true },
      {
        // path: PAGES.EXPLORE,
        path: "/explore",
        label: "Explore",
        icon: FaRegCompass,
        component: Explore,
        exact: true,
      },
      {
        path: "/login", component:LoginPage, exact: true
      },
      {
        path: PAGES.RESOURCES,
        label: "Resources",
        icon: HiOutlineNewspaper,
        component: ResourcesPage,
        exact: true,
      },
      // {path: '/test', component: TestPage, exact: true},
    ],
  },
];
