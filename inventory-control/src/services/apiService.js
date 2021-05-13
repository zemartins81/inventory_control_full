import {get} from './httpService'

export async function getAllProducts() {
  return await get('http://localhost:3001/products');
}