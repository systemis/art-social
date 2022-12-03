import HomePage from "pages/home-page/page/index";
import {FaRegCompass} from 'react-icons/fa';
import {HiOutlineNewspaper} from 'react-icons/hi';
import ExplorePage from "pages/explore/page/index";
import ResourcesPage from "pages/resources/page/index";
import { BasicRoute } from "components/elements/AppRouter";
import Layout from "components/layouts/Layout";
import { PAGES } from "constants/app";

export const routes: BasicRoute[] = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      { path: "/", component: HomePage, exact: true },
      {
        path: PAGES.EXPLORE,
        label: "Explore",
        icon: FaRegCompass,
        component: ExplorePage,
        exact: true,
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
