import qs from "qs";
import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { StorageProvider } from "./storage.provider";
import { appConfig } from "config";

export interface RequestConfig extends AxiosRequestConfig {
  externalEndpoint?: string; 
}

export class NetworkProvider {
  /**
   * @private
   * @dev
   * Base api url located in evn file
   */
  private BASE_URL = appConfig.api.url;

  /**
   * Default network options
   * @private
   */
  private defaultNetWorkOptions: RawAxiosRequestHeaders = {
    "Content-Type": "application/json",
  };

  /**
   * Storage provider
   * @private
   */
  private storageProvider;

  /**
   * @description
   * Initilize mode
   */
  constructor() {
    this.storageProvider = new StorageProvider();
  }

  /**
   * @param url
   * @param requestConfig
   * @returns
   * @description
   * The function to request to the api
   */
  async request<RequestResponse>(
    url: string,
    requestConfig: RequestConfig
  ): Promise<RequestResponse> {
    const resp = await axios(url, {
      ...requestConfig,
      baseURL: requestConfig.externalEndpoint ? requestConfig.externalEndpoint : `${this.BASE_URL}/api`,
      paramsSerializer: {
        serialize: (params: any) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      },
      headers: {
        ...this.defaultNetWorkOptions,
        ...requestConfig.headers,
      },
    }).catch((e) => e.response);

    if (!resp || resp?.status >= 400) {
      throw new Error(resp?.data?.data?.error_description || resp);
    }

    let jsonData = resp.data?.data;
    try {
      jsonData = JSON.parse(resp.data);
    } catch {}

    return jsonData as RequestResponse;
  }

  /**
   * @param url
   * @param requestConfig
   * @returns
   * @description
   * The function to request to the api with credential
   */
  async requestWithCredentials<RequestResponse>(
    url: string,
    requestConfig: RequestConfig
  ): Promise<RequestResponse> {
    const credential = this.storageProvider.getItem("access_token");
    const idToken = this.storageProvider.getItem("id_token");
    if (!credential || !idToken) {
      return null;
    }
    const options = Object.assign({}, requestConfig);
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${credential}`,
    };
    options.params = Object.assign(requestConfig.data || {}, {
      id_token: idToken,
    });
    return this.request<RequestResponse>(url, options);
  }
}

export const networkProvider = new NetworkProvider();
