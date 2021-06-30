import {get, patch, post} from "./httpService";

export async function getProductList() {
  return await get("https://gpgestoque-318223.uc.r.appspot.com/products");
}

export async function postNewProduct(product) {
  return await post("https://gpgestoque-318223.uc.r.appspot.com/products", product);
}

export async function patchUpdateProduct(product) {
  return await patch(`https://gpgestoque-318223.uc.r.appspot.com/products?id=${product._id}`, product)
}
