import env from "config/env";

export type AppStages = "development" | "staging";

interface AppConfig {
  stage: AppStages;
  api: {
    host: string;
    url: string;
    timeout: number;
  };
  googleClientId: string;
  url: string;
  imageHostingKey: string;
  [key: string]: any;
}

const {STAGE} = env as {STAGE: AppStages};

const config: AppConfig = {
    stage: STAGE,
    api: {
      host: env.API.HOST,
      url: `${env.API.HOST}`,
      timeout: env.API.TIMEOUT,
    },
    url: env.URL,
    googleClientId: env.GOOGLE_CLIENT_ID,
    imageHostingKey: env.IMAGE_HOSTING_KEY
  };
  
  export default config;