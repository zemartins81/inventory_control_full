import {get, patch, post} from "./httpService";

export async function getProductList() {
  return await get("https://apiestoque.azurewebsites.net/products");
}

export async function postNewProduct(product) {
  return await post("https://apiestoque.azurewebsites.net/products", product);
}

export async function patchUpdateProduct(product) {
  return await patch(`https://apiestoque.azurewebsites.net/products?id=${product._id}`, product)
}
