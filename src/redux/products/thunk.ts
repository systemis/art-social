import {getNetworkProvider, getStorageProvider} from "providers";
import {ProductEntity} from 'entity/product.entity';

const networkProvider = getNetworkProvider();
const storageProvider = getStorageProvider();

export const fetchProducts = networkProvider.request<ProductEntity>("/products", {
    method: "GET"
  });
export const addProduct = networkProvider.request<ProductEntity>("/product", {
    method: "POST",
    // data: ,
    // id_token: storageProvider.getItem("id_token")
  });
export const updateProduct = networkProvider.request<ProductEntity>("/products/:id", {
    method: "POST"
  });
export const deleteProducts = networkProvider.request<ProductEntity>("/products", {
    method: "GET"
  });
export const fetchMailTemplate = networkProvider.request<ProductEntity>("/products", {
    method: "GET"
  });