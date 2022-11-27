import React from "react";
import "App.css";
import { AppRouter } from "components/elements/AppRouter";
import config from 'config/app-config';
import {routes} from 'routes';

function App() {
  return (
    <AppRouter
      basename={config.routeBaseName}
      routes={routes}
      defaultRedirect="/"
    />
  );
}

export default App;
