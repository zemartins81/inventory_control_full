import { useEffect, useState } from 'react'
import { getProductList } from '../../services/apiService'
import './products.css'

import Header from '../../components/header/Header'
import InsertProduct from '../../components/insertProduct/InsertProduct'
import Card from '../../components/card/Card'

export default function Products() {
  const [products, setProducts] = useState([])
  const [refreshList, setRefreshList] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const [insertProduct, setInsertProduct] = useState(false)

  useEffect(() => {
    const getAllProducts = async () => {
      const productsList = await (await getProductList()).data

      // eslint-disable-next-line func-names
      const orderedList = await productsList.data.sort(function (a, b) {
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()
        // eslint-disable-next-line no-nested-ternary
        return aName < bName ? -1 : aName > bName ? 1 : 0
      })

      setProducts(orderedList)
    }
    getAllProducts()
      .then(() => {
        setRefreshList(false)
      })
      // eslint-disable-next-line no-alert
      .catch(() => alert('Não foi possível conectar ao Servidor!'))
  }, [refreshList])

  const newListProducts =
    filterValue.trim() === ''
      ? [...products]
      : products.filter((product) =>
          product.name.toLowerCase().includes(filterValue.toLowerCase()),
        )

  const handleFilterChange = (event) => {
    setFilterValue(event.currentTarget.value)
  }

  const data = insertProduct ? (
    <InsertProduct
      setRefreshList={setRefreshList}
      setInsertProduct={setInsertProduct}
    />
  ) : (
    <>
      <input
        type="text"
        name="findProducts"
        className="findProducts"
        placeholder="Busca Produtos"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <aside>
        <ul>
          {newListProducts.map((product) => (
            // eslint-disable-next-line no-underscore-dangle
            <Card key={product._id} product={product} />
          ))}
        </ul>
      </aside>
      <main>
        <ul>
          {newListProducts.map((product) => (
            // eslint-disable-next-line no-underscore-dangle
            <Card key={product._id} product={product} />
          ))}
        </ul>
      </main>
    </>
  )

  return (
    <div className="container">
      <Header insertProduct={(value) => setInsertProduct(value)} />
      <div className="data">{data}</div>
    </div>
  )
}
