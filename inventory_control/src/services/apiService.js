import {get, patch, post} from "./httpService";

export async function getProductList() {
  return await get("https://apiestoque.azurewebsites.net/");
}

export async function postNewProduct(product) {
  return await post("https://apiestoque.azurewebsites.net/", product);
}

export async function patchUpdateProduct(product) {
  return await patch(`https://apiestoque.azurewebsites.net?id=${product._id}`, product)
}
