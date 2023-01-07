const stage = process.env.REACT_APP_ENV || "development";

let environment: {
  STAGE: string;
  API: {
    TIMEOUT: number;
    HOST: string;
  };
  GOOGLE_CLIENT_ID: string;
  IMAGE_HOSTING_KEY: string;
  URL: string;
};

switch (stage) {
  case "staging":
    environment = {
      STAGE: stage,
      API: {
        TIMEOUT: 60000,
        HOST: "https://afternoon-gorge-11599.herokuapp.com",
      },
      GOOGLE_CLIENT_ID: "",
      IMAGE_HOSTING_KEY: "6d207e02198a847aa98d0a2a901485a5",
      URL: "",
    };
    break;
  case "test":
  case "development":
  default:
    environment = {
      STAGE: stage,
      API: {
        TIMEOUT: 60000,
        HOST: "https://afternoon-gorge-11599.herokuapp.com",
      },
      GOOGLE_CLIENT_ID: "",
      IMAGE_HOSTING_KEY: "6d207e02198a847aa98d0a2a901485a5",
      URL: "",
    };
    break;
}

export default environment;
