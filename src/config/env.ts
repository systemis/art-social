const stage = process.env.REACT_APP_ENV || "development";

let environment: {
  STAGE: string;
  API: {
    TIMEOUT: number;
    HOST: string;
  };
  GOOGLE_CLIENT_ID: string;
  URL: string;
};

switch (stage) {
  case "staging":
    environment = {
      STAGE: stage,
      API: {
        TIMEOUT: 60000,
        HOST: "",
      },
      GOOGLE_CLIENT_ID: "",
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
        HOST: "",
      },
      GOOGLE_CLIENT_ID: "",
      URL: "",
    };
    break;
}

export default environment;
