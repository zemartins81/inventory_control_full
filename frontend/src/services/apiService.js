import {get, patch, post} from "./httpService";

export async function getProductList() {
  return await get("http://localhost:3001/products");
}

export async function postNewProduct(product) {
  return await post("http://localhost:3001/products", product);
}

export async function patchUpdateProduct(product) {
  return await patch(`http://localhost:3001/products?id=${product._id}`, product);
}
