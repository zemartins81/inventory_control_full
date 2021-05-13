import React, {useEffect, useState} from 'react'
import Products from '../compoents/content/products/Products'
import Header from '../compoents/header/Header'
import {getAllProducts} from '../services/apiService'
import Loading from "../compoents/content/Loading";

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getProductList() {
      const productsList = await getAllProducts()
      setProducts(productsList.data);

      setTimeout(() => {
        setLoading(false)
      }, 500)
    }

    getProductList();

  }, []);

  let data = (
    <div className="flex flex-row items-center justify-center">
      <Loading/>
    </div>
  )

  if (!loading) data = <Products products={products}/>

  return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <Header>Controle de Estoque</Header>
          {data}
        </div>
    )
}
