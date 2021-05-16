import {get, post} from './httpService'

export async function getProductList() {
  return await get('http://localhost:3001/products');
}

export async function postNewProduct(product) {
  return await post('http://localhost:3001/products', product)
}