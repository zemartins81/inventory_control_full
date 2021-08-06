import api from './httpService'

const getProducts = async () => {
  const result = await api.get('/products')
  console.log(result)
}

export { getProducts }
