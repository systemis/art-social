"use strict";
exports.__esModule = true;
var stage = process.env.REACT_APP_ENV || "development";
var environment;
switch (stage) {
    case "staging":
        environment = {
            STAGE: stage,
            API: {
                TIMEOUT: 60000,
                HOST: "http://localhost:3000"
            },
            GOOGLE_CLIENT_ID: "",
            IMAGE_HOSTING_KEY: "6d207e02198a847aa98d0a2a901485a5",
            URL: ""
        };
        break;
    case "test":
    case "development":
    default:
        environment = {
            STAGE: stage,
            API: {
                TIMEOUT: 60000,
                HOST: "http://localhost:3000"
            },
            GOOGLE_CLIENT_ID: "",
            IMAGE_HOSTING_KEY: "6d207e02198a847aa98d0a2a901485a5",
            URL: ""
        };
        break;
}
exports["default"] = environment;
