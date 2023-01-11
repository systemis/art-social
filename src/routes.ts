import { FaRegCompass } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import ResourcesPage from "pages/resource-page/page/index";
import { BasicRoute } from "components/elements/AppRouter";
import Layout from "components/layouts/Layout";
import { PAGES } from "constants/app";
import ProductDetail from "pages/product-detail/page";
import Explore from "pages/explore/page";
import HomePage from "pages/home-page/page";
import SignIn from "pages/login/components/SignIn";
import SignUp from "pages/login/components/SignUp";
import CreateProduct from "pages/create-product/page";
import Profile from "pages/profile/page";
import {EditProfile} from "pages/edit-profile/pages";
import CreateProject from "pages/create-project";

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
        component: Explore,
        exact: true,
      },
      {
        path: PAGES.SIGNUP,
        component: SignUp,
        exact: true,
      },
      {
        path: PAGES.SIGNIN,
        component: SignIn,
        exact: true,
      },
      {
        path: PAGES.RESOURCES,
        label: "Resources",
        icon: HiOutlineNewspaper,
        component: ResourcesPage,
        exact: true,
      },
      {
        path: PAGES.CREATE_PRODUCT,
        component: CreateProduct,
        exact: true,
      },
      {
        path: `${PAGES.PRODUCT_DETAIL}/:id`,
        component: ProductDetail,
        exact: true,
      },
      {
        path: PAGES.PROFILE,
        component: Profile,
        exact: true,
      },
      {
        path: PAGES.EDIT_PROFILE,
        component: EditProfile,
        exact: true,
      },
      {
        path: PAGES.CREATE_PROJECT,
        component: CreateProject,
        exact: true,
      }
    ],
  },
];
