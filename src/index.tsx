import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "index.css";
import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import RootStore from "redux/root-store";
import reportWebVitals from "reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { uiTheme } from "theme/chakra-theme";
import { Provider } from "react-redux";
import { MainProvider } from "hooks/useMain";
import Fonts from "theme/chakra-font";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={RootStore}>
      <ChakraProvider theme={uiTheme}>
        <MainProvider>
          <Fonts />
          <App />
        </MainProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
