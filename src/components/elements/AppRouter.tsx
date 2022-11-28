import React, { memo } from "react";
import { IconType } from "react-icons/lib";
import { map, omit } from "lodash";
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";

export interface BasicRoute extends RouteProps {
  path: string;
  redirect?: string;
  routes?: BasicRoute[];
  action?: "new-tab";
  label?: string;
  icon?: IconType;
  class?: string;
}

export interface AppRouterProps {
  basename?: string;
  defaultRedirect: string;
  routes?: BasicRoute[];
  notFoundPage?: React.FunctionComponent<any>;
  unauthorizedPage?: React.FunctionComponent<any>;
}

const omitRouteRenderProps = (route: BasicRoute) => {
  return omit(route, ["render", "component"]);
};

const NotFoundPageDefault = () => {
  return <Redirect to={"/"} />;
};

// const UnauthorizedPageDefault = () => {
//   return (
//     <div>
//       <h1>This is an unauthorized page by default</h1>
//     </div>
//   );
// };

export const AppRouter = memo(function AppRouter({
  basename,
  defaultRedirect,
  routes = [],
  notFoundPage: NotFoundPage = NotFoundPageDefault,
  // unauthorizedPage: UnauthorizedPage = UnauthorizedPageDefault,
}: AppRouterProps) {
  const renderRedirectRoute = (route: BasicRoute) => (
    <Route
      key={`redirect-${route.path}`}
      {...omitRouteRenderProps(route)}
      render={() => <Redirect to={route.redirect || defaultRedirect} />}
    />
  );

  const renderRoute = (route: BasicRoute, parentPath = "") => {
    const {
      path,
      component: RouteComponent = ({
        children,
      }: {
        children: React.ReactNode;
      }) => <div>{children}</div>,
      exact,
    } = route;
    const fullPath =
      parentPath && parentPath !== "/" ? `${parentPath}${path}` : path;

    // Handle redirect URLs
    if (route.redirect) {
      return renderRedirectRoute(route);
    }

    return !route.routes ? (
      <Route
        key={`public-${fullPath}`}
        exact={exact === undefined ? true : exact}
        {...omitRouteRenderProps(route)}
        path={fullPath}
        render={(props) => <RouteComponent {...props} />}
      />
    ) : (
      <Route
        key={`public-${fullPath}`}
        exact={exact === undefined ? true : exact}
        {...omitRouteRenderProps(route)}
        path={fullPath}
        render={(props) => (
          <RouteComponent {...props}>
            <Switch>
              {route?.routes?.map((subRoute) =>
                renderRoute(subRoute, fullPath)
              )}
              {renderNotFoundRoute()}
            </Switch>
          </RouteComponent>
        )}
      />
    );
  };

  const renderNotFoundRoute = () => {
    return (
      <Route
        path="*"
        key="notfound-route"
        render={(props) => <NotFoundPage {...props} />}
      />
    );
  };

  return (
    <BrowserRouter basename={basename}>
      <Switch>
        {routes.map((route) => renderRoute(route))}
        {renderNotFoundRoute()}
      </Switch>
    </BrowserRouter>
  );
});
