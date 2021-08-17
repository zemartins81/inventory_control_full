import httpService from './httpService'

const { get, post, patch } = { ...httpService }

export async function getProductList() {
  return get('http://localhost:3001/products')
}

export async function postNewProduct(product) {
  const result = await post('http://localhost:3001/products', product)
  return result
}

export async function patchUpdateProduct(product) {
  // eslint-disable-next-line no-underscore-dangle
  return patch(`http://localhost:3001?id=${product._id}`, product)
}
