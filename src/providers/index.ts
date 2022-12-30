import { StorageProvider } from "./storage.provider";
import { NetworkProvider } from "./network.provider";

/**
 * @dev Initialize storage provider.
 * @returns {StorageProvider}
 */
export const getStorageProvider = () => new StorageProvider();

/**
 * @dev Initialize network provider.
 * @returns {NetworkProvider}
 */
export const getNetworkProvider = () => new NetworkProvider();
